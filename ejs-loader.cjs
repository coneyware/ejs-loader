/**
 * ejsをwebpackで読み込むためのloader  
 * 見つけられるloaderではちゃんとinclude対応できないので、作った
 * @module ejs-loader
 */
// import ejs from "ejs";
const ejs = require("ejs");

const getOptions = (ctx) => {
	return ctx.getOptions
		? ctx.getOptions() // webpack 5
		: require("loader-utils").getOptions(ctx); // webpack 4
};

const normalizeOptions = (ctx, options) => {
	const renderOptions = {
		...(options?.renderOptions ?? {})
	};
	const userIncluder = renderOptions.includer;
	renderOptions.filename = ctx.resourcePath;
	renderOptions.includer = (originalPath, parsedPath) => {
		if (parsedPath) {
			ctx.addDependency(parsedPath);
		}
		if (typeof userIncluder === "function") {
			const userResult = userIncluder(originalPath, parsedPath);
			if (userResult?.filename) {
				ctx.addDependency(userResult.filename);
			}
			return userResult;
		}
		return parsedPath ? {"filename": parsedPath} : undefined;
	};
	return {
		"ejsData": options?.ejsData
		, renderOptions
	};
};

const mainAsync = async(content, options) => {
	return ejs.render(content, options?.ejsData, options.renderOptions);
};

const mainSync = (content, options) => {
	return ejs.render(content, options?.ejsData, options.renderOptions);
};

module.exports = function ejsLoader(content, map, meta) {
	this.cacheable?.(true);
	let ret = null;
	const options = normalizeOptions(this, getOptions(this));
	if (options?.renderOptions?.async) {
		// https://webpack.js.org/api/loaders/#asynchronous-loaders
		const webpackCallback = this.async();
		mainAsync(content, options)
			.then((result) => {
				webpackCallback(null, result, map, meta);
			})
			.catch((err) => {
				webpackCallback(err, null, map, meta);
			});
	} else {
		ret = mainSync(content, options);
	}
	return ret;
};
