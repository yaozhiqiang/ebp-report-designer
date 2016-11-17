/**
 * Created by yaoshining on 16/3/4.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var Server = require('karma').Server;

function runTests (singleRun, done) {
    new Server({
        configFile: path.join(__dirname, '/../karma.conf.js'),
        singleRun: singleRun,
        autoWatch: !singleRun
    }, done).start();
}

gulp.task('test', ['scripts'], function(done) {
    runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
    runTests(false, done);
});