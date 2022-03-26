
npx webpack -c webpack.config.async.mjs --mode=production
npx webpack -c webpack.config.sync.mjs --mode=production
node async_bundle.js
node sync_bundle.js
