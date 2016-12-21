/**
 * Created by yao on 15/8/18.
 */
'use strict';
var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

var browserSync = require('browser-sync');

var browserSyncSpa = require('browser-sync-spa');
var proxyMiddleware = require('http-proxy-middleware');
var util = require('util');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === conf.paths.app || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.app) !== -1)) {
        routes = {
            '/bower_components': 'bower_components',
            '/data': 'data'
        };
    }

    var server = {
        baseDir: baseDir,
        routes: routes
    };

    var proxy1 = proxyMiddleware('/pms', {
        target: 'http://176.18.3.11:8082'
    });

    var proxy2 = proxyMiddleware('/plt', {
        target: 'http://176.18.3.11:8080'
    });

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser,
        middleware: [proxy1, proxy2]
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.app],['google chrome']);
});

gulp.task('serve:e2e', ['inject'], function () {
    browserSyncInit([conf.paths.tmp + '/serve', conf.paths.app], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit(conf.paths.dist, []);
});