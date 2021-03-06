
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {fileURLToPath} from "url";

// ES module形式だと以前の__dirnameが使えないので取り出す。
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);


export default () => {
	const ret = {
		"entry": "./test_sync.mjs"
		, "output": {
			"path": __dirname
			, "filename": "sync_bundle.js"
		}
		, "module": {
			"rules": [
				{
					"test": /\.ejs$/u
					, "exclude": /async.ejs$/u
					, "use": [
						{
							"loader": "html-loader"
						}
						, {
							"loader": "../"
							, "options": {
								"renderOptions": {
									"async": false
								}
								, "ejsData": {
									"text": "hello"
									, "common": "world"
								}
							}
						}
					]
				}
			]
		}
		, "plugins": [
			new HtmlWebpackPlugin({
				"filename": "template_sync.html"
				, "template": "template_sync.ejs"
			})
		]
	};
	return ret;
};
