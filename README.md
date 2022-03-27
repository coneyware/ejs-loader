# ejs-loader for webpack 4.x and webpack 5.x
webpack4とwebpack5に対応したejs-loader

どちらでも使用できるのでdependenciesの設定をしていない

## webpack 4.xで使用するとき
dependencies
* webpack@4
* html-loader@1

## webpack 5.xで使用するとき
dependencies
* webpack@5
* html-loader@3

## webpack.configの書き方
* [commonJS形式](test/webpack.config.sync.cjs)
* module形式
	+ [非同期](test/webpack.config.sync.mjs)
	+ [同期（HTML出力）](test/webpack.config.sync.mjs)

### options設定
see [ejs](https://github.com/mde/ejs)
* ejsData
	+ ejs.render(x, o, x)の第二引数
* renderOptions
	+ ejs.render(x, x, o)の第三引数
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
