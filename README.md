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

## webpack 5 のキャッシュについて
webpack 5 のfilesystem cacheを有効にしている場合、loader内で`process.chdir`のような
グローバル状態変更を行うと、ビルド結果が不安定になる可能性がある。

このloaderは以下の方針でwebpack 5 cacheと両立する。
* `renderOptions.filename`に`loaderContext.resourcePath`を設定して`include`解決を安定化
* `include`対象を`loaderContext.addDependency`で依存登録して再ビルド判定を正しくする
* `loaderContext.cacheable(true)`を有効化

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
