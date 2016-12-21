/**
 * Created by yao on 15/8/19.
 */
exports.paths = {
    app: 'app',
    src: 'app/src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e'
};

var gutil = require('gulp-util');

exports.errorHandler = function(title) {
    'use strict';

    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

exports.wiredep = {
    exclude: [/bootstrap\.css/],
    directory: 'bower_components'
};