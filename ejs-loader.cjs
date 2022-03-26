/**
 * ejsをwebpackで読み込むためのloader  
 * 見つけられるloaderではちゃんとinclude対応できないので、作った
 * @module ejs-loader
 */
// import ejs from "ejs";
const ejs = require("ejs");
const path = require("path");

const cwd = process.cwd();

const getOptions = (ctx) => {
	return ctx.getOptions
		? ctx.getOptions() // webpack 5
		: require("loader-utils").getOptions(ctx); // webpack 4
};

const mainAsync = async(content, resourcePath, options, callback) => {
	process.chdir(path.dirname(resourcePath));
	let ret = null;
	try {
		ret = await ejs.render(content, options?.ejsData, options.renderOptions);
	} catch (err) {
		callback(err, null);
	} finally {
		process.chdir(options.cwd ?? cwd);
	}
	callback(null, ret);
};

const mainSync = (content, resourcePath, options) => {
	process.chdir(path.dirname(resourcePath));
	let ret = null;
	ret = ejs.render(content, options?.ejsData, options.renderOptions);
	process.chdir(options.cwd ?? cwd);
	return ret;
};

module.exports = function ejsLoader(content, map, meta) {
	let ret = null;
	const options = getOptions(this);
	if (typeof options.renderOptions === "undefined") {
		options.renderOptions = {};
	}
	options.renderOptions.filename = path.basename(this.resourcePath);
	if (options?.renderOptions?.async) {
		// https://webpack.js.org/api/loaders/#asynchronous-loaders
		const webpackCallback = this.async();
		mainAsync(content, this.resourcePath, options, (err, result) => {
			webpackCallback(err, result, map, meta);
		});
	} else {
		ret = mainSync(content, this.resourcePath, options);
	}
	return ret;
};
