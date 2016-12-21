/**
 * Created by yao on 15/12/4.
 */
// import * as angular from 'angular';
import core from './designer/core.module';

var ebpReportDesigner = angular.module('ebp.report.designer', [
    'ngResource',
    core.name,
    'ebp-ui',
    'angular-yao-utils'
]);

export default ebpReportDesigner;
