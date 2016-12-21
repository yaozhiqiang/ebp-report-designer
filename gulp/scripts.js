/**
 * Created by yao on 15/8/19.
 */
'use strict';
var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();
var gulpWebpack = require('webpack-stream');

function webpack(watch, filename, destDir,callback) {
    var webpackOptions = {
        watch: watch,
        resolve: {
            extensions: ['', '.ts', '.js'],
            modulesDirectories: ['node_modules', 'bower_components']
        },
        module: {
            preLoaders: [{ test: /\.js$/, exclude: [/node_modules/, /bower_componenets/], loader: 'jshint-loader'}],
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-es2015-modules-amd']
                }
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts'
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
        output: { filename: filename + '.js'}
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

    return gulp.src(path.join(conf.paths.src, '/'+filename+'.ts'))
       .pipe(gulpWebpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, destDir)));
}

gulp.task('scripts', function () {
    return webpack(false,'index.module', '/serve/app');
});

gulp.task('scripts:watch',['scripts'],function (callback) {
    return webpack(true,'index.module', '/serve/app',callback);
});

gulp.task('scripts:product', function () {
    return webpack(false,'ebp-report-designer', '/product');
});