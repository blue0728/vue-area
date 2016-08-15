'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
//启动服务
var port = 8642;
var app = new WebpackDevServer(webpack(config), {});
app.listen(port, function() {
	console.log('start server：http://localhost:%s', port)
});