'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
//启动服务
var app = new WebpackDevServer(webpack(config), {});
app.listen(8642, function() {
	console.log('start server：http://localhost:9100')
});