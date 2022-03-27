# ejs-loader for webpack 4&5
webpack4とwebpack5に対応したejs-loader


## webpack.configの書き方
* [commonJS形式](test/webpack.config.sync.cjs)
* module形式
	+ [非同期](test/webpack.config.sync.mjs)
	+ [同期（HTML出力）](test/webpack.config.sync.mjs)

### options設定
* ejsData
	+ ejs.render()の第二引数
* renderOptions
	+ ejs.render()の第三引数
	+ **filenameはloaderContext.resourePathを内部で設定**

```
	, "options": {
		"renderOptions": {
			"async": false
		}
		, "ejsData": {
			"text": "hello"
			, "common": "world"
		}
	}
```
