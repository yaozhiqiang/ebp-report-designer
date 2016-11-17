/**
 * Created by yao on 15/8/19.
 */
'use strict';
var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['scripts:watch','inject'], function () {

    gulp.watch([path.join(conf.paths.app, '/*.html'), 'bower.json'], ['inject']);

    gulp.watch([
        path.join(conf.paths.src, '/**/*.css'),
        path.join(conf.paths.src, '/**/*.scss'),
        path.join(conf.paths.app, '/styles/{,*/}*.scss')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    });


    gulp.watch([
        path.join(conf.paths.src, '/**/*.html')
    ], function(event) {
        browserSync.reload(event.path);
    });
});