/**
 * Created by yao
 */
import ebpReportDesigner from './ebp-report-designer';
import layout from './layouts/layouts.module';
import routesConfig from './index.routes';
import TreeTableDemoController from './demos/controllers/treeTableDemo.controller';

angular.module('ebpUIDemo',['ui.router', layout.name, ebpReportDesigner.name])
    .config(routesConfig)
    .controller('TreeTableDemoController', TreeTableDemoController)
    .run();
