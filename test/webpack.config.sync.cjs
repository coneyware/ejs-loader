
module.exports = () => {
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
	};
	return ret;
};
