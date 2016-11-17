/**
 * Created by yao on 15/12/4.
 */
import core from './designer/core.module';

var ebpReportDesigner = angular.module('ebp.report.designer', [
    'ngResource',
    core.name
]);

export default ebpReportDesigner;
