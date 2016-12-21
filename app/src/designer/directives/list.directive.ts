/**
 * Created by yaoshining on 2016/12/21.
 */
function ReportListDirectiveFactory():ng.IDirective {

    function linkFunc() {

    }

    let directive = {
        restrict: 'AE',
        templateUrl: 'src/designer/templates/list.tpl.html',
        link: linkFunc,
        controller: ReportListController
    };

    return directive;
}

class ReportListController implements ng.IController{
    constructor($scope, yaoFullscreen, reportService) {
        'ngInject';
        $scope.reports = [];

        $scope.groups = [];

        $scope.selectedGroupId = 1;

        function fetchReports() {
            reportService.getReportList($scope.selectedGroupId).then(data => {
                $scope.reports = data;
            });
        }

        fetchReports();

        reportService.getGroupList().then(data => {
            $scope.groups = data;
        });

        $scope.preview = (reportDef) => {
            yaoFullscreen.open({
                templateUrl: 'src/designer/templates/preview.tpl.html',
                controller: 'ReportPreviewController',
                controllerAs: '$preview',
                resolve: {
                    report: JSON.parse(reportDef)
                }
            });
        };

        $scope.changeGroup = group => {
            $scope.selectedGroupId = group.id;
            fetchReports();
        };
    }
}

export default ReportListDirectiveFactory;