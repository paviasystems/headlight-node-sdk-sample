/**
* This includes the Pavia Headlight Node SDK gulpfile
*
* @license     All Rights Reserved
* @copyright   Copyright (c) 2016, Pavia
*
* @author      Steven Velozo <steven@paviasystems.com>
*
* @description This is the swill build file to test the javascript, css, html and less.  Plus generate / minify the site.
*/
var _Swill = require(__dirname+'/_node_modules_working/headlight-node-sdk').new({StaticContentFolder: __dirname+'/stage/'}).swill();

var gulp = _Swill.gulp;

// watch for changes
gulp.task('watch', function() {
    gulp.watch(['headlight-app/**/*','_node_modules_working/headlight-node-sdk/**/*'], ['build-debug']);
});