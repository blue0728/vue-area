'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:9100', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

//启动服务
var app = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
});
app.listen(9100, function() {
	console.log('start server：http://localhost:9100')
});