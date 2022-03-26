
import path from "path";
import {fileURLToPath} from "url";

// ES module形式だと以前の__dirnameが使えないので取り出す。
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);


export default () => {
	const ret = {
		"entry": "./test_async.mjs"
		, "output": {
			"path": __dirname
			, "filename": "async_bundle.js"
		}
		, "module": {
			"rules": [
				{
					"test": /\.ejs$/u
					, "use": [
						{
							"loader": "html-loader"
						}
						, {
							"loader": "../"
							, "options": {
								"renderOptions": {
									"async": true
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
	};
	return ret;
};
