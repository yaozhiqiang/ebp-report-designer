/**
 * Created by yaoshining on 15/8/18.
 */
var gulp = require('gulp');

var fs = require('fs-extra');

fs.walkSync('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./' + file);
});