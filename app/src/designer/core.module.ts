/**
 * Created by yaoshining on 16/3/1.
 */
// import * as angular from 'angular';
import * as config from './config';

import ChartPropsController from './controllers/charts-props.controller';
import TablePropsController from './controllers/table-props.controller';
import DatasourcePropsController from './controllers/datasource-props.controller';
import ReportPreviewController from './controllers/preview.controller';
import {ReportDatasourceFactory} from './services/datasource.service';
import {ReportServiceFactory} from './services/report.service';
import {WidgetServiceFactory} from './services/widget.service';
import ReportDesignerDirectiveFactory from './directives/designer.directive';
import ReportWidgetDirectiveFactory from './directives/widget.directive';
import ReportListDirectiveFactory from './directives/list.directive';

let coreModule = angular.module('ebp.report.designer.core', []);
coreModule.constant('defaultSettings', config.treeTableSettings)
          .factory('reportDatasourceService', ReportDatasourceFactory)
          .factory('reportService', ReportServiceFactory)
          .factory('reportWidgetService', WidgetServiceFactory)
          .controller('ChartPropsController', ChartPropsController)
          .controller('TablePropsController', TablePropsController)
          .controller('DatasourcePropsController', DatasourcePropsController)
          .controller('DatasourcePropsController', DatasourcePropsController)
          .controller('ReportPreviewController', ReportPreviewController)
          .directive('ebpReportWidget', ReportWidgetDirectiveFactory)
          .directive('ebpReportDesigner', ReportDesignerDirectiveFactory)
          .directive('ebpReportList', ReportListDirectiveFactory);

coreModule.run(function(yaoGuid, $window) {
    'ngInject';
    $window.guid = yaoGuid;
});    

export default coreModule;