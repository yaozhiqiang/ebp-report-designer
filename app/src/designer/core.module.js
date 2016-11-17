/**
 * Created by yaoshining on 16/3/1.
 */
import * as config from './config';

import ChartPropsController from './controllers/charts-props.controller';
import TablePropsController from './controllers/table-props.controller';
import DatasourcePropsController from './controllers/datasource-props.controller';
import {ReportDatasourceFactory} from './services/datasource.service';
import {ReportServiceFactory} from './services/report.service';
import ReportDesignerDirectiveFacroty from './directives/designer.directive';
import ReportWidgetDirectiveFacroty from './directives/widget.directive';

let coreModule = angular.module('ebp.report.designer.core', ['ebp-ui', 'angular-yao-utils']);
coreModule.constant('defaultSettings', config.treeTableSettings)
          .factory('reportDatasourceService', ReportDatasourceFactory)
          .factory('reportService', ReportServiceFactory)
          .controller('ChartPropsController', ChartPropsController)
          .controller('TablePropsController', TablePropsController)
          .controller('DatasourcePropsController', DatasourcePropsController)
          .directive('ebpReportWidget', ReportWidgetDirectiveFacroty)
          .directive('ebpReportDesigner', ReportDesignerDirectiveFacroty);

coreModule.run(function(yaoGuid) {
    'ngInject';
    window.guid = yaoGuid;
});    

export default coreModule;