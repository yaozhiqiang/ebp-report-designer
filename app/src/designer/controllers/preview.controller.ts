/**
 * Created by yaoshining on 2016/11/30.
 */
class ReportPreviewController implements ng.IController {

    constructor($scope, private yaoFullscreen, report, private $element, $resource) {
        'ngInject';
        $scope.$report = report;

        this.yaoFullscreen = yaoFullscreen;

        $scope.filterParams = {};

        $scope.refreshReport = () => {
            $scope.$broadcast('ebp.report.refresh', {
                filterParams: $scope.filterParams
            });
        };

        let optionData = {

        };

        if(angular.isArray(report.filterFields)) {
            report.filterFields.filter(f => f.inputType === 'select').forEach(field => {
                const url = field.inputOptions.url;
                optionData[field.seqId] = $resource(url, {}).query();
            });
        }

        $scope.getOptionData = id => optionData[id];

        $scope.getWidget = id => _.find(report.widgets, {id});

    }

    close() {
        this.yaoFullscreen.close();
    }

    exportHTML() {
        angular.download(this.$element.find('.report-wrapper')[0]);
    }

    print() {
        window.print();
    }
}

export default ReportPreviewController;