/**
 * Created by yao on 15/8/19.
 */
'use strict';
var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();
function webpack(watch, filename, destDir,callback) {
    var webpackOptions = {
        watch: watch,
        module: {
            preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}],
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-es2015-modules-amd']
                }
            }]
        },
        jshint: {
            esnext: true,
            jquery: true,
            browser: true,
            globals: {
                'angular': false,
                '_': false
            }
        },
        output: { filename: filename}
    };

    if(watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function(err, stats) {
        if(err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));
        browserSync.reload();
        if(watch) {
            watch = false;
            callback();
        }
    };

    return gulp.src(path.join(conf.paths.src, '/'+filename))
       .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, destDir)));
}

gulp.task('scripts', function () {
    return webpack(false,'index.module.js', '/serve/app');
});

gulp.task('scripts:watch',['scripts'],function (callback) {
    return webpack(true,'index.module.js', '/serve/app',callback);
});

gulp.task('scripts:product', function () {
    return webpack(false,'ebp-report-designer.js', '/product');
});