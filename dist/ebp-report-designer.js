/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yao on 15/12/4.
	 */
	// import * as angular from 'angular';
	var core_module_1 = __webpack_require__(1);
	var ebpReportDesigner = angular.module('ebp.report.designer', [
	    'ngResource',
	    core_module_1.default.name,
	    'ebp-ui',
	    'angular-yao-utils'
	]);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ebpReportDesigner;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 16/3/1.
	 */
	// import * as angular from 'angular';
	var config = __webpack_require__(2);
	var charts_props_controller_1 = __webpack_require__(3);
	var table_props_controller_1 = __webpack_require__(4);
	var datasource_props_controller_1 = __webpack_require__(5);
	var preview_controller_1 = __webpack_require__(6);
	var datasource_service_1 = __webpack_require__(7);
	var report_service_1 = __webpack_require__(9);
	var widget_service_1 = __webpack_require__(10);
	var designer_directive_1 = __webpack_require__(11);
	var widget_directive_1 = __webpack_require__(33);
	var list_directive_1 = __webpack_require__(36);
	var coreModule = angular.module('ebp.report.designer.core', []);
	coreModule.constant('defaultSettings', config.treeTableSettings)
	    .factory('reportDatasourceService', datasource_service_1.ReportDatasourceFactory)
	    .factory('reportService', report_service_1.ReportServiceFactory)
	    .factory('reportWidgetService', widget_service_1.WidgetServiceFactory)
	    .controller('ChartPropsController', charts_props_controller_1.default)
	    .controller('TablePropsController', table_props_controller_1.default)
	    .controller('DatasourcePropsController', datasource_props_controller_1.default)
	    .controller('DatasourcePropsController', datasource_props_controller_1.default)
	    .controller('ReportPreviewController', preview_controller_1.default)
	    .directive('ebpReportWidget', widget_directive_1.default)
	    .directive('ebpReportDesigner', designer_directive_1.default)
	    .directive('ebpReportList', list_directive_1.default);
	coreModule.run(function (yaoGuid, $window) {
	    'ngInject';
	    $window.guid = yaoGuid;
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = coreModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/9.
	 */
	// import * as angular from 'angular';
	"use strict";
	exports.directiveNames = {
	    ebpTreeTable: 'ebpTreetable',
	    ebpTreeTableCol: 'ebpTreetableCol',
	    ebpTreeTableNode: 'ebpTreetableNode',
	    ebpTreeTableCell: 'ebpTreetableCell',
	    ebpTreeTableHeader: 'columnheader'
	};
	exports.treeTableSettings = {
	    expandAll: false,
	    colDefs: [],
	    events: {
	        edit: angular.noop,
	        remove: angular.noop,
	        add: angular.noop
	    },
	    dataSource: {
	        read: null
	    }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 16/9/6.
	 */
	var ChartPropsController = (function () {
	    function ChartPropsController($scope) {
	        'ngInject';
	        $scope.$chart = $scope.$designer.selectedItem;
	        $scope.config = $scope.$chart.config;
	    }
	    return ChartPropsController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChartPropsController;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 16/9/6.
	 */
	// import * as angular from 'angular';
	var TablePropsController = (function () {
	    function TablePropsController($scope, reportDatasourceService) {
	        'ngInject';
	        $scope.$table = $scope.$designer.selectedItem;
	        $scope.config = $scope.$table.config || {};
	        var report = $scope.$designer.report;
	        $scope.fields = [];
	        if (report.dataSource) {
	            reportDatasourceService.getFields(report.dataSource.seqId).then(function (fields) {
	                $scope.fields = fields;
	                if (angular.isArray($scope.config.displayFields)) {
	                    $scope.config.displayFields.forEach(function (f) {
	                        var matched = _.find($scope.fields, { 'seqId': f.seqId });
	                        if (matched) {
	                            matched['$checked'] = true;
	                        }
	                    });
	                }
	            });
	        }
	        $scope.onFieldStatusChange = function (field) {
	            if (field.$checked) {
	                var _field = $.extend({}, field);
	                delete _field.$checked;
	                $scope.config.displayFields.push(_field);
	            }
	            else {
	                _.remove($scope.config.displayFields, function (f) {
	                    return f.seqId === field.seqId;
	                });
	            }
	        };
	    }
	    return TablePropsController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TablePropsController;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by yaoshining on 16/9/6.
	 */
	// import * as angular from 'angular';
	"use strict";
	var DatasourcePropsController = (function () {
	    function DatasourcePropsController($scope, reportDatasourceService) {
	        'ngInject';
	        var report = $scope.report = $scope.$designer.report;
	        $scope.fields = [];
	        if (report.dataSource) {
	            reportDatasourceService.getFields(report.dataSource.seqId).then(function (fields) {
	                $scope.fields = fields;
	                if (angular.isArray(report.filterFields)) {
	                    report.filterFields.forEach(function (f) {
	                        var matched = _.find($scope.fields, { 'seqId': f.seqId });
	                        if (matched) {
	                            matched['$checked'] = true;
	                        }
	                    });
	                }
	            });
	        }
	        $scope.dataSources = [];
	        reportDatasourceService.getDataSources().then(function (dataSources) {
	            $scope.dataSources = dataSources;
	        });
	        $scope.onDataSourceChange = function (dataSource) {
	            report.filterFields = [];
	            if (report.dataSource) {
	                reportDatasourceService.getFields(dataSource.seqId).then(function (fields) {
	                    $scope.fields = fields;
	                });
	            }
	        };
	        $scope.onFilterFieldStatusChange = function (field) {
	            if (field.$checked) {
	                var _field = $.extend({}, field);
	                delete _field.$checked;
	                report.filterFields.push(_field);
	            }
	            else {
	                _.remove(report.filterFields, function (f) {
	                    return f.seqId === field.seqId;
	                });
	            }
	        };
	    }
	    return DatasourcePropsController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DatasourcePropsController;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/30.
	 */
	var ReportPreviewController = (function () {
	    function ReportPreviewController($scope, yaoFullscreen, report, $element, $resource) {
	        'ngInject';
	        this.yaoFullscreen = yaoFullscreen;
	        this.$element = $element;
	        $scope.$report = report;
	        this.yaoFullscreen = yaoFullscreen;
	        $scope.filterParams = {};
	        $scope.refreshReport = function () {
	            $scope.$broadcast('ebp.report.refresh', {
	                filterParams: $scope.filterParams
	            });
	        };
	        var optionData = {};
	        if (angular.isArray(report.filterFields)) {
	            report.filterFields.filter(function (f) { return f.inputType === 'select'; }).forEach(function (field) {
	                var url = field.inputOptions.url;
	                optionData[field.seqId] = $resource(url, {}).query();
	            });
	        }
	        $scope.getOptionData = function (id) { return optionData[id]; };
	        $scope.getWidget = function (id) { return _.find(report.widgets, { id: id }); };
	    }
	    ReportPreviewController.prototype.close = function () {
	        this.yaoFullscreen.close();
	    };
	    ReportPreviewController.prototype.exportHTML = function () {
	        angular.download(this.$element.find('.report-wrapper')[0]);
	    };
	    ReportPreviewController.prototype.print = function () {
	        window.print();
	    };
	    return ReportPreviewController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ReportPreviewController;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/1.
	 */
	var API_1 = __webpack_require__(8);
	function ReportDatasourceFactory($http, $q) {
	    function getFields(srcId) {
	        var deferred = $q.defer();
	        var url = API_1.default.getFieldsByDataSource;
	        $http.get(url, {
	            params: {
	                dataSrcSeqId: srcId
	            }
	        }).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    function getDataSources() {
	        var deferred = $q.defer();
	        var url = API_1.default.getAllDataSource;
	        $http.get(url).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    return { getFields: getFields, getDataSources: getDataSources };
	}
	exports.ReportDatasourceFactory = ReportDatasourceFactory;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/22.
	 */
	var API = {
	    getTableData: '/pms/project/report/getReportData',
	    getChartData: '/pms/project/report/getReportData',
	    getAllDataSource: '/plt/dataSource/getAllDataSrcSource',
	    getFieldsByDataSource: '/plt/dataSource/queryItem',
	    saveReportDef: '/plt/reportTpl/addReportTpl',
	    getProjectTypes: '/pms/resources/codeitemtree/getTree?t=1479793526596&bizType=PRJTYPE',
	    getDepartments: '/plt/formtpl/getOrgList',
	    getReportList: '/plt/reportTpl/typebyIdList',
	    getReportGroupList: '/plt/reportType/typeList'
	};
	var testAPI = {
	    getTableData: '/data/reports/table/1.json',
	    getChartData: '/data/reports/salesVolumn.json',
	    getAllDataSource: '/data/reports/datasource/all.json',
	    getFieldsByDataSource: '/data/reports/datasource/1.json',
	    saveReportDef: '/plt/reportTpl/addReportTpl',
	    getProjectTypes: '/data/reports/project/types.json',
	    getDepartments: '/data/reports/department/all.json',
	    getReportList: '/data/reports/list.json',
	    getReportGroupList: '/data/reports/group/list.json'
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = API;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/11.
	 */
	var API_1 = __webpack_require__(8);
	function ReportServiceFactory($http, $q) {
	    function save(report) {
	        var deferred = $q.defer();
	        var url = API_1.default.saveReportDef;
	        $http.post(url, {
	            reportName: report.title,
	            reportTypeSeqId: 1,
	            remark: "备注",
	            reportDef: JSON.stringify(report)
	        }).then(function (res) {
	            report.seqId = res.data.rtData.seqId;
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    function getReportList(groupId) {
	        var deferred = $q.defer();
	        var url = API_1.default.getReportList;
	        $http.get(url, {
	            params: {
	                typeSeqId: groupId
	            }
	        }).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    function getGroupList() {
	        var deferred = $q.defer();
	        var url = API_1.default.getReportGroupList;
	        $http.get(url).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    return { save: save, getReportList: getReportList, getGroupList: getGroupList };
	}
	exports.ReportServiceFactory = ReportServiceFactory;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var API_1 = __webpack_require__(8);
	function WidgetServiceFactory($http, $q) {
	    function getTableData(params) {
	        var deferred = $q.defer();
	        var url = API_1.default.getTableData;
	        $http.get(url, { params: params }).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    function getChartData(params) {
	        var deferred = $q.defer();
	        var url = API_1.default.getChartData;
	        $http.get(url, { params: params }).then(function (res) {
	            deferred.resolve(res.data);
	        }, function (res) {
	            deferred.reject(res);
	        });
	        return deferred.promise;
	    }
	    return { getTableData: getTableData, getChartData: getChartData };
	}
	exports.WidgetServiceFactory = WidgetServiceFactory;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/15.
	 */
	var WidgetSelector_1 = __webpack_require__(12);
	var SideMenu_1 = __webpack_require__(20);
	var Report_1 = __webpack_require__(21);
	var Bloc_1 = __webpack_require__(22);
	function ReportDesignerDirectiveFactory() {
	    function linkFunc(scope, elem, attrs, designer) {
	        elem.addClass('report-designer');
	        var reportElem = elem.find('.report-wrapper'), headerElem = reportElem.find('.report-header'), bodyElem = reportElem.find('.report-body');
	        headerElem.on('click', function (e) {
	            headerElem.toggleClass('active');
	        });
	        elem.on('contextmenu', function () {
	            designer.widgetSelector.toggle();
	            scope.$digest();
	            return false;
	        });
	    }
	    var directive = {
	        restrict: 'AE',
	        link: linkFunc,
	        templateUrl: 'src/designer/templates/designer.tpl.html',
	        controller: DesignerController,
	        controllerAs: '$designer'
	    };
	    return directive;
	}
	var DesignerController = (function () {
	    function DesignerController($scope, $element, yaoFullscreen, reportService) {
	        'ngInject';
	        var _this = this;
	        this.widgetSelector = WidgetSelector_1.default.$invoke(this, { $scope: $scope, $element: $element });
	        this.sidemenu = $scope.sidemenu = SideMenu_1.default.$invoke(this, { $scope: $scope, $element: $element });
	        this.report = Report_1.default.$invoke(this, { $scope: $scope, $element: $element });
	        this.select = function (item) {
	            if (_this.selectedItem) {
	                _this.selectedItem.element.removeClass('selected');
	            }
	            _this.selectedItem = item;
	            item.element.addClass('selected');
	            _this.sidemenu.refresh();
	        };
	        this.preview = function () {
	            yaoFullscreen.open({
	                templateUrl: 'src/designer/templates/preview.tpl.html',
	                controller: 'ReportPreviewController',
	                controllerAs: '$preview',
	                resolve: {
	                    report: _this.report
	                }
	            });
	        };
	        this.save = function () {
	            reportService.save(_this.report);
	        };
	    }
	    DesignerController.prototype.addBloc = function () {
	        var block = new Bloc_1.default(this.report);
	        this.report.insertBloc(block);
	    };
	    return DesignerController;
	}());
	var PreviewController = (function () {
	    function PreviewController($scope, yaoFullscreen, report, $element) {
	        'ngInject';
	        this.yaoFullscreen = yaoFullscreen;
	        this.$element = $element;
	        $scope.$report = report;
	    }
	    PreviewController.prototype.close = function () {
	        this.yaoFullscreen.close();
	    };
	    ;
	    PreviewController.prototype.print = function () {
	        print();
	    };
	    ;
	    PreviewController.prototype.exportHTML = function () {
	        angular.download(this.$element.find('.report-wrapper')[0]);
	    };
	    return PreviewController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ReportDesignerDirectiveFactory;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/16.
	 */
	var widgets = __webpack_require__(13);
	function WidgetSelector() {
	    var self = this;
	    var WidgetSelector = (function () {
	        function WidgetSelector() {
	            var _this = this;
	            this.enable = false;
	            this.widgets = widgets;
	            this.selectedWidget = widgets['BarChart'];
	            this.enable = false;
	            this.widgets = widgets;
	            this.selectedWidget = widgets['BarChart'];
	            Object.defineProperties(self, {
	                cursor: {
	                    get: function () {
	                        if (_this.enable) {
	                            return 'cursor-' + _this.selectedWidget.name;
	                        }
	                        return '';
	                    }
	                }
	            });
	        }
	        WidgetSelector.prototype.toggle = function () {
	            this.enable = !this.enable;
	        };
	        WidgetSelector.prototype.select = function (widget) {
	            this.selectedWidget = widget;
	        };
	        return WidgetSelector;
	    }());
	    return new WidgetSelector();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WidgetSelector;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	__export(__webpack_require__(14));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	var Chart_1 = __webpack_require__(15);
	var BarChart = (function (_super) {
	    __extends(BarChart, _super);
	    function BarChart() {
	        _super.call(this);
	        this.type = Chart_1.ChartType.BAR;
	        this.name = BarChart.name;
	        this.title = '柱状图';
	    }
	    Object.defineProperty(BarChart, "name", {
	        get: function () {
	            return 'barchart';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return BarChart;
	}(Chart_1.default));
	exports.BarChart = BarChart;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	var Widget_1 = __webpack_require__(16);
	var Chart = (function (_super) {
	    __extends(Chart, _super);
	    function Chart() {
	        _super.call(this);
	        this.category = 'chart';
	        this.type = null;
	        this.title = '图表';
	        this.config = {
	            title: '未命名图表',
	            dataSource: {
	                url: '',
	                params: []
	            }
	        };
	    }
	    Chart.prototype.render = function () {
	        _super.prototype.render.call(this);
	        this.element.on('click', clickHandler.bind(this));
	        return this.element;
	    };
	    return Chart;
	}(Widget_1.default));
	function clickHandler() {
	    var sidemenu = this.$designer.sidemenu;
	    sidemenu.changeTab(2, 'src/designer/templates/charts-props.tpl.html');
	    this.$designer.select(this);
	}
	exports.ChartType = {
	    BAR: 'bar',
	    LINE: 'line',
	    PIE: 'pie'
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Chart;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/24.
	 */
	var Widget = (function () {
	    function Widget() {
	        this.id = guid();
	        this.category = null;
	        this.name = null;
	        this.title = '组件';
	        var element = $('<div>').addClass('report-widget');
	        var _report = null;
	        Object.defineProperties(this, {
	            element: {
	                get: function () { return element; }
	            },
	            report: {
	                set: function (report) { return _report = report; },
	                get: function () { return _report; }
	            }
	        });
	    }
	    Widget.prototype.render = function () {
	        var _this = this;
	        this.element.attr('title', this.title);
	        this.element.append($('<div>').addClass("widget-" + this.name));
	        var removeButton = $('<div>').addClass('widget-remove-button').on('click', function () {
	            alert(2);
	        }).hover(function () {
	            _this.element.addClass('warning');
	        }, function () {
	            _this.element.removeClass('warning');
	        });
	        this.element.append(removeButton);
	        return this.element;
	    };
	    return Widget;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Widget;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	var Chart_1 = __webpack_require__(15);
	var LineChart = (function (_super) {
	    __extends(LineChart, _super);
	    function LineChart() {
	        _super.call(this);
	        this.type = Chart_1.ChartType.LINE;
	        this.name = LineChart.name;
	        this.title = '线图';
	    }
	    Object.defineProperty(LineChart, "name", {
	        get: function () {
	            return 'linechart';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LineChart;
	}(Chart_1.default));
	exports.LineChart = LineChart;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	var Chart_1 = __webpack_require__(15);
	var PieChart = (function (_super) {
	    __extends(PieChart, _super);
	    function PieChart() {
	        _super.call(this);
	        this.type = Chart_1.ChartType.PIE;
	        this.name = PieChart.name;
	        this.title = '饼图';
	    }
	    Object.defineProperty(PieChart, "name", {
	        get: function () {
	            return 'piechart';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return PieChart;
	}(Chart_1.default));
	exports.PieChart = PieChart;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/25.
	 */
	var Widget_1 = __webpack_require__(16);
	var Table = (function (_super) {
	    __extends(Table, _super);
	    function Table() {
	        _super.call(this);
	        this.category = 'table';
	        this.name = Table.name;
	        this.title = '表格';
	        this.config = {
	            title: '未命名表格',
	            dataSource: {
	                url: '',
	                params: []
	            },
	            displayFields: []
	        };
	    }
	    Object.defineProperty(Table, "name", {
	        get: function () {
	            return 'table';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Table.prototype.render = function () {
	        _super.prototype.render.call(this);
	        this.element.on('click', clickHandler.bind(this));
	        return this.element;
	    };
	    return Table;
	}(Widget_1.default));
	exports.Table = Table;
	function clickHandler() {
	    var sidemenu = this.$designer.sidemenu;
	    sidemenu.changeTab(2, 'src/designer/templates/table-props.tpl.html');
	    this.$designer.select(this);
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Created by yaoshining on 16/8/10.
	 */
	"use strict";
	function SideMenu($element, $scope, $timeout) {
	    'ngInject';
	    var opened = false, tabs = [{
	            id: 1,
	            title: '报表',
	            view: {
	                templateUrl: 'src/designer/templates/report-props.tpl.html'
	            }
	        }, {
	            id: 2,
	            title: '数据',
	            view: {
	                templateUrl: 'src/designer/templates/datasource-props.tpl.html'
	            }
	        }, {
	            id: 3,
	            view: {},
	            title: '组件'
	        }];
	    var activeTab = tabs[0];
	    var Panel = (function () {
	        function Panel() {
	            $element.find('.designer-menu').on('click', function (event) { return event.stopPropagation(); });
	        }
	        Object.defineProperty(Panel.prototype, "opened", {
	            get: function () {
	                return opened;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Panel.prototype.toggle = function (event) {
	            event.stopPropagation();
	            $element.find('.menu-button').toggleClass('opened');
	            opened = !opened;
	        };
	        Object.defineProperty(Panel.prototype, "tabs", {
	            get: function () {
	                return tabs;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Panel.prototype, "activeTab", {
	            get: function () {
	                return activeTab;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Panel.prototype.changeTab = function (tab, templateUrl) {
	            if (typeof tab == 'object') {
	                activeTab = tab;
	            }
	            if (typeof tab == 'number') {
	                activeTab = tabs[tab];
	            }
	            if (templateUrl) {
	                activeTab.view = { templateUrl: templateUrl };
	            }
	            if (!$scope.$$phase) {
	                $scope.$apply();
	            }
	        };
	        Panel.prototype.refresh = function () {
	            var tmp = activeTab.view;
	            activeTab.view = {
	                templateUrl: ''
	            };
	            if (!$scope.$$phase) {
	                $scope.$apply();
	            }
	            $timeout(function () {
	                activeTab.view = tmp;
	            }, 0);
	        };
	        return Panel;
	    }());
	    return new Panel();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SideMenu;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/10.
	 */
	function Report($scope, $element) {
	    'ngInject';
	    var Report = (function () {
	        function Report() {
	            var _this = this;
	            $.extend(this, {
	                title: '未命名报表',
	                subtitle: '关于此报表的详细说明',
	                blocs: [],
	                widgets: [],
	                getWidget: function (id) { return _.find(_this.widgets, { id: id }); }
	            });
	            Object.defineProperties(this, {
	                $scope: {
	                    get: function () { return $scope; }
	                }
	            });
	        }
	        Report.prototype.insertBloc = function (bloc) {
	            $element.find('.report-body').append(bloc.render());
	            this.blocs.push(bloc);
	        };
	        Report.prototype.insertBlocAfter = function (pre, bloc) {
	            var i = $.inArray(pre, this.blocs) + 1;
	            if (i === 0) {
	                this.insertBloc(bloc);
	            }
	            else {
	                bloc.render().insertAfter(pre.element);
	                this.blocs.splice(i, 0, bloc);
	            }
	        };
	        Report.prototype.removeBloc = function (bloc) {
	            var _this = this;
	            var i = -1;
	            if ((i = $.inArray(bloc, this.blocs)) > -1) {
	                $scope.$apply(function () {
	                    _this.blocs.splice(i, 1);
	                });
	            }
	        };
	        return Report;
	    }());
	    var report = new Report(), self = this;
	    Object.defineProperties(report, {
	        $designer: {
	            get: function () { return self; }
	        }
	    });
	    return report;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Report;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/11.
	 */
	// import * as angular from 'angular';
	var Layouts = __webpack_require__(23);
	var Bloc = (function () {
	    function Bloc(report) {
	        var _this = this;
	        var _layout = null;
	        Object.defineProperties(this, {
	            report: {
	                get: function () { return report; }
	            },
	            layout: {
	                get: function () { return _layout; },
	                set: function (layout) {
	                    if (_layout) {
	                        _this.removeLayout();
	                    }
	                    _layout = layout;
	                    var addBloc = $('<div>').addClass('add-bloc-btn').text('+').on('click', function () {
	                        var bloc = new Bloc(_this.report);
	                        _this.report.insertBlocAfter(_this, bloc);
	                    }), el = layout.render();
	                    el.append(addBloc);
	                    _this.element.append(el);
	                }
	            }
	        });
	    }
	    Bloc.prototype.render = function () {
	        this.element = renderEmptyElement.bind(this).call();
	        return this.element;
	    };
	    Bloc.prototype.destroy = function () {
	        this.element.remove();
	    };
	    Bloc.prototype.removeLayout = function () {
	        this.layout.container.remove();
	    };
	    Bloc.prototype.toJSON = function () {
	        var obj = $.extend({}, this);
	        delete obj.element;
	        delete obj.selectPane;
	        obj.layout = this.layout;
	        return obj;
	    };
	    return Bloc;
	}());
	function renderEmptyElement() {
	    var _this = this;
	    var root = $('<div>').addClass('report-bloc-wrapper');
	    this.selectPane = new SelectPane(this);
	    root.append(this.selectPane.render());
	    setTimeout(function () {
	        _this.selectPane.open();
	    }, 0);
	    $compile(root)(this.report.$scope);
	    return root;
	}
	var SelectPane = (function () {
	    function SelectPane(bloc) {
	        Object.defineProperties(this, {
	            bloc: {
	                get: function () { return bloc; }
	            },
	            report: {
	                get: function () { return bloc.report; }
	            }
	        });
	    }
	    SelectPane.prototype.render = function () {
	        this.element = renderSelectPane.bind(this).call();
	        return this.element;
	    };
	    SelectPane.prototype.open = function () {
	        var _this = this;
	        this.element.addClass('opened');
	        $(document).one('click', function (event) {
	            var parents = $(event.target).parents().addBack();
	            if (parents.is('.select-pane')) {
	                return false;
	            }
	            if (parents.is('.report-designer')) {
	                _this.close();
	            }
	        });
	    };
	    SelectPane.prototype.close = function () {
	        var _this = this;
	        this.element.removeClass('opened');
	        if (!this.bloc.layout) {
	            setTimeout(function () {
	                _this.bloc.destroy();
	                _this.report.removeBloc(_this.bloc);
	            }, 500);
	        }
	    };
	    return SelectPane;
	}());
	function renderSelectPane() {
	    var _this = this;
	    var pane = $('<div>').addClass('select-pane assistant');
	    var leftButton = $("\n            <span class=\"pull-left\">\n                <i class=\"fa fa-angle-left\"></i>\n            </span>\n        "), rightButton = $("\n            <span class=\"pull-right\">\n                <i class=\"fa fa-angle-right\"></i>\n            </span>\n        "), title = $('<div>').addClass('pane-title')
	        .append(leftButton).append(rightButton);
	    var body = $('<div>').addClass('pane-body');
	    var list = $('<ul>').addClass('pane-h-list');
	    angular.forEach(Layouts, function (Layout) {
	        var thumbnail = Layout.thumbnail;
	        list.append($('<li>').html(thumbnail));
	        thumbnail.on('click', function () {
	            _this.bloc.layout = new Layout(_this.bloc);
	        });
	    });
	    body.append(list);
	    pane.append(title).append(body);
	    pane.on('click', function (event) {
	        event.stopPropagation();
	    });
	    leftButton.on('click', function () {
	        var currentPosition = parseInt(list.css('margin-left')), step = 300, endPoint = 0;
	        currentPosition += step;
	        if (currentPosition > endPoint) {
	            currentPosition = endPoint;
	        }
	        list.stop(true, true).animate({
	            'margin-left': currentPosition
	        });
	    });
	    rightButton.on('click', function () {
	        var currentPosition = parseInt(list.css('margin-left')), step = 300, endPoint = body.width() - list.width() + 20;
	        currentPosition -= step;
	        if (currentPosition < endPoint) {
	            currentPosition = endPoint;
	        }
	        list.stop(true, true).animate({
	            'margin-left': currentPosition
	        });
	    });
	    $compile(pane)(this.report.$scope);
	    return pane;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Bloc;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	__export(__webpack_require__(24));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var OneColumn = (function (_super) {
	    __extends(OneColumn, _super);
	    function OneColumn(bloc) {
	        _super.call(this, bloc);
	        this.addRow(new Row_1.default(12, 1));
	    }
	    Object.defineProperty(OneColumn, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-12\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OneColumn.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return OneColumn;
	}(Layout_1.default));
	exports.OneColumn = OneColumn;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Created by yaoshining on 16/8/12.
	 */
	"use strict";
	function generateContainer() {
	    var container = $('<div>').addClass('report-bloc');
	    return container;
	}
	var Layout = (function () {
	    function Layout(bloc) {
	        this.container = generateContainer();
	        this.rows = [];
	        Object.defineProperties(this, {
	            bloc: {
	                get: function () { return bloc; }
	            }
	        });
	    }
	    Layout.prototype.render = function () {
	        return this.container;
	    };
	    Layout.prototype.addRow = function (row) {
	        var _this = this;
	        Object.defineProperties(row, {
	            layout: {
	                get: function () { return _this; }
	            },
	            $designer: {
	                get: function () { return _this.bloc.report.$designer; }
	            }
	        });
	        this.rows.push(row);
	    };
	    Layout.prototype.toJSON = function () {
	        var obj = $.extend({}, this);
	        delete obj.container;
	        return obj;
	    };
	    return Layout;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Layout;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yaoshining on 16/8/12.
	 */
	"use strict";
	// import * as angular from 'angular';
	var Column_1 = __webpack_require__(27);
	function Row(size, colNum) {
	    var _this = this;
	    var element = $('<div>').addClass('report-row'), content = $('<div>').addClass('row-content'), cols = [];
	    size = size || 12;
	    Object.defineProperties(this, {
	        cols: {
	            get: function () { return cols; }
	        },
	        element: {
	            get: function () { return element; }
	        }
	    });
	    $.extend(this, {
	        addColumn: function (col) {
	            Object.defineProperties(col, {
	                $designer: {
	                    get: function () { return _this.$designer; }
	                }
	            });
	            cols.push(col);
	        },
	        render: function () {
	            element.addClass('col-md-' + size).addClass(size === 12 ? 'no-padding' : '');
	            angular.forEach(cols, function (col, i) { return content.append(col.render(i)); });
	            element.empty().append(content);
	            return element;
	        },
	        changeColsTo: function (num) {
	            cols.length = 0;
	            for (var i = 0; i < num; i++) {
	                var column = new Column_1.default(12 / num);
	                _this.addColumn(column);
	            }
	            content.empty();
	            _this.render();
	        },
	        toJSON: function () {
	            var obj = $.extend({}, _this);
	            obj.cols = cols;
	            obj.size = size;
	            return obj;
	        }
	    });
	    if (colNum) {
	        for (var i = 0; i < colNum; i++) {
	            var column = new Column_1.default(12 / colNum);
	            this.addColumn(column);
	        }
	    }
	    element.on({
	        'click': function (e) {
	            if ($(e.target).parents().addBack().is('.report-widget')) {
	                return;
	            }
	            var sidemenu = _this.$designer.sidemenu;
	            sidemenu.changeTab(2, 'src/designer/templates/row-props.tpl.html');
	            _this.$designer.select(_this);
	        },
	        'mouseover': function (e) {
	            if ($(e.target).parents().addBack().is('.report-widget')) {
	                content.removeClass('hover-intent');
	            }
	            else {
	                content.addClass('hover-intent');
	            }
	        }
	    });
	    content.hover(function () {
	        content.addClass('hover-intent');
	    }, function () {
	        content.removeClass('hover-intent');
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Row;


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	function Column(size) {
	    var _this = this;
	    var element = $('<div>').addClass('report-col'), content = $('<div>').addClass('col-content');
	    size = size || 12;
	    Object.defineProperties(this, {
	        size: {
	            get: function () { return size; }
	        }
	    });
	    $.extend(this, {
	        render: function (i) {
	            element.addClass('col-xs-' + size);
	            element.addClass('num-' + i);
	            element.empty().append(content);
	            return element;
	        },
	        toJSON: function () {
	            var obj = $.extend({}, _this);
	            obj.size = size;
	            return obj;
	        }
	    });
	    content.on('click', function () {
	        var widgetSelector = _this.$designer.widgetSelector;
	        if (widgetSelector.enable) {
	            var widget = new widgetSelector.selectedWidget();
	            _this.$designer.report.widgets.push(widget);
	            widget.report = _this.$designer.report;
	            _this.content = {
	                id: widget.id
	            };
	            Object.defineProperties(widget, {
	                $designer: {
	                    get: function () { return _this.$designer; }
	                }
	            });
	            content.html(widget.render());
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Column;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var TwoColumn = (function (_super) {
	    __extends(TwoColumn, _super);
	    function TwoColumn(bloc) {
	        _super.call(this, bloc);
	        this.addRow(new Row_1.default(12, 2));
	    }
	    Object.defineProperty(TwoColumn, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-6\"></div>\n                <div class=\"col-6\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TwoColumn.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return TwoColumn;
	}(Layout_1.default));
	exports.TwoColumn = TwoColumn;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var ThreeColumn = (function (_super) {
	    __extends(ThreeColumn, _super);
	    function ThreeColumn(bloc) {
	        _super.call(this, bloc);
	        this.addRow(new Row_1.default(12, 3));
	    }
	    Object.defineProperty(ThreeColumn, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ThreeColumn.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return ThreeColumn;
	}(Layout_1.default));
	exports.ThreeColumn = ThreeColumn;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var FourColumn = (function (_super) {
	    __extends(FourColumn, _super);
	    function FourColumn(bloc) {
	        _super.call(this, bloc);
	        this.addRow(new Row_1.default(12, 4));
	    }
	    Object.defineProperty(FourColumn, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-3\"></div>\n                <div class=\"col-3\"></div>\n                <div class=\"col-3\"></div>\n                <div class=\"col-3\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FourColumn.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return FourColumn;
	}(Layout_1.default));
	exports.FourColumn = FourColumn;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var Column_1 = __webpack_require__(27);
	var TwoToOne = (function (_super) {
	    __extends(TwoToOne, _super);
	    function TwoToOne(bloc) {
	        _super.call(this, bloc);
	        var row = new Row_1.default(12);
	        row.addColumn(new Column_1.default(8));
	        row.addColumn(new Column_1.default(4));
	        this.addRow(row);
	    }
	    Object.defineProperty(TwoToOne, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-8\"></div>\n                <div class=\"col-4\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TwoToOne.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return TwoToOne;
	}(Layout_1.default));
	exports.TwoToOne = TwoToOne;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by yaoshining on 16/8/12.
	 */
	// import * as angular from 'angular';
	var Layout_1 = __webpack_require__(25);
	var Row_1 = __webpack_require__(26);
	var Column_1 = __webpack_require__(27);
	var OneToTwo = (function (_super) {
	    __extends(OneToTwo, _super);
	    function OneToTwo(bloc) {
	        _super.call(this, bloc);
	        var row = new Row_1.default(12);
	        row.addColumn(new Column_1.default(4));
	        row.addColumn(new Column_1.default(8));
	        this.addRow(row);
	    }
	    Object.defineProperty(OneToTwo, "thumbnail", {
	        get: function () {
	            return $("\n            <div class=\"layout-thumbnail\">\n                <div class=\"col-4\"></div>\n                <div class=\"col-8\"></div>\n            </div>\n        ");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OneToTwo.prototype.render = function () {
	        var _this = this;
	        angular.forEach(this.rows, function (row) {
	            _this.container.append(row.render());
	        });
	        return this.container;
	    };
	    return OneToTwo;
	}(Layout_1.default));
	exports.OneToTwo = OneToTwo;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by yaoshining on 16/8/24.
	 */
	var table_render_1 = __webpack_require__(34);
	var chart_render_1 = __webpack_require__(35);
	function ReportWidgetDirectiveFactory() {
	    function linkFunc(scope, elem) {
	        var widget = scope.widget;
	        if (!widget) {
	            return false;
	        }
	        scope.$on('yaoFullscreen.afterRender', function () {
	            if (widget.category === 'chart') {
	                chart_render_1.renderChart.$invoke(this, { scope: scope, elem: elem, widget: widget });
	            }
	            if (widget.category === 'table') {
	                table_render_1.renderTable.$invoke(this, { scope: scope, elem: elem, widget: widget });
	            }
	        });
	    }
	    var directive = {
	        restrict: 'AE',
	        link: linkFunc,
	        scope: {
	            widget: '=ebpReportWidget',
	            report: '=report'
	        }
	    };
	    return directive;
	}
	var ReportWidgetController = (function () {
	    function ReportWidgetController() {
	    }
	    return ReportWidgetController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ReportWidgetDirectiveFactory;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/7.
	 */
	function renderTable(scope, elem, $compile, widget, reportWidgetService) {
	    var tableTitle = $('<div>').addClass('report-widget-title').text(widget.config.title);
	    var ebpTable = $('<div>', {
	        'ebp-table': '$tableView.ebpTable',
	        'settings': '$tableView.widgetSettings',
	        'ng-model': '$tableView.tableData'
	    });
	    var widgetSettings = {
	        "colDefs": getColDefs(widget)
	    };
	    var report = scope.report;
	    scope.$tableView = {
	        tableData: [],
	        ebpTable: {},
	        widgetSettings: widgetSettings
	    };
	    var params = {
	        dataSrcId: report.seqId,
	        widgetId: widget.id,
	    };
	    function fetchTableData(filterParams) {
	        if (!angular.isObject(filterParams)) {
	            filterParams = {};
	        }
	        params.filterParams = filterParams;
	        reportWidgetService.getTableData(params).then(function (data) {
	            if ($.isPlainObject(scope.$tableView.ebpTable)) {
	                scope.$tableView.tableData = data;
	                elem.empty().append(tableTitle);
	                elem.empty().append($compile(ebpTable)(scope));
	            }
	            else {
	                scope.$tableView.tableData = data;
	            }
	        });
	    }
	    fetchTableData();
	    function getColDefs(widget) {
	        var cols = [], config = widget.config;
	        var displayFields = config.displayFields;
	        displayFields.forEach(function (field) {
	            var col = {
	                name: field.dataSrcItemName,
	                title: field.dataSrcItemLabel,
	                type: 'field',
	                dataType: 'string'
	            };
	            cols.push(col);
	        });
	        return { cols: cols };
	    }
	    scope.$on('ebp.report.refresh', function (event, args) {
	        fetchTableData(args.filterParams);
	    });
	    //only for presentation
	    setTimeout(function () {
	        elem.find('.ebp-table-content').on('scroll', function () {
	            var scrollLeft = $(this).prop('scrollLeft');
	            elem.find('.ebp-table-header').css({
	                transform: "matrix(1, 0, 0, 1, " + -scrollLeft + ", 0)"
	            });
	        });
	    }, 3000);
	}
	exports.renderTable = renderTable;


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/11/7.
	 */
	function renderChart(scope, elem, widget, reportWidgetService) {
	    'ngInject';
	    var report = scope.report;
	    var params = {
	        dataSrcId: report.seqId,
	        widgetId: widget.id
	    };
	    function fetchChartData(filterParams) {
	        if (!angular.isObject(filterParams)) {
	            filterParams = {};
	        }
	        params.filterParams = filterParams;
	        reportWidgetService.getChartData(params).then(function (result) {
	            var data = result.data;
	            elem.height(400);
	            var chart = echarts.init(elem[0]), config = widget.config;
	            var xAxis = [];
	            if (data.length > 0) {
	                xAxis = data[0].datapoints.map(function (point) { return point.x; });
	            }
	            var options = {
	                title: {
	                    text: config.title
	                },
	                tooltip: {},
	                legend: {
	                    data: data.map(function (item) { return item.name; }),
	                    bottom: 0
	                },
	                toolbox: {
	                    feature: {
	                        magicType: {
	                            type: ['stack', 'tiled']
	                        },
	                        dataView: {},
	                        saveAsImage: {
	                            pixelRatio: 2
	                        }
	                    }
	                },
	                xAxis: {
	                    data: xAxis
	                },
	                yAxis: {},
	                series: data.map(function (item) {
	                    return {
	                        name: item.name,
	                        type: widget.type,
	                        data: item.datapoints.map(function (point) { return point.y; })
	                    };
	                })
	            };
	            chart.setOption(options);
	            $(window).on('resize', function () {
	                chart.resize();
	            });
	        });
	    }
	    fetchChartData();
	    scope.$on('ebp.report.refresh', function (event, args) {
	        fetchChartData(args.filterParams);
	    });
	}
	exports.renderChart = renderChart;


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by yaoshining on 2016/12/21.
	 */
	function ReportListDirectiveFactory() {
	    function linkFunc() {
	    }
	    var directive = {
	        restrict: 'AE',
	        templateUrl: 'src/designer/templates/list.tpl.html',
	        link: linkFunc,
	        controller: ReportListController
	    };
	    return directive;
	}
	var ReportListController = (function () {
	    function ReportListController($scope, yaoFullscreen, reportService) {
	        'ngInject';
	        $scope.reports = [];
	        $scope.groups = [];
	        $scope.selectedGroupId = 1;
	        function fetchReports() {
	            reportService.getReportList($scope.selectedGroupId).then(function (data) {
	                $scope.reports = data;
	            });
	        }
	        fetchReports();
	        reportService.getGroupList().then(function (data) {
	            $scope.groups = data;
	        });
	        $scope.preview = function (reportDef) {
	            yaoFullscreen.open({
	                templateUrl: 'src/designer/templates/preview.tpl.html',
	                controller: 'ReportPreviewController',
	                controllerAs: '$preview',
	                resolve: {
	                    report: JSON.parse(reportDef)
	                }
	            });
	        };
	        $scope.changeGroup = function (group) {
	            $scope.selectedGroupId = group.id;
	            fetchReports();
	        };
	    }
	    return ReportListController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ReportListDirectiveFactory;


/***/ }
/******/ ]);
angular.module("ebp.report.designer").run(["$templateCache", function($templateCache) {$templateCache.put("src/designer/templates/add.tpl.html","<div ct-report-designer=\"\"></div>");
$templateCache.put("src/designer/templates/charts-props.tpl.html","<div class=\"chart-props\" ng-controller=\"ChartPropsController\"><div class=\"content-title\"><span>{{$chart.title}}</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">设置</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"chartTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"config.title\" id=\"chartTitle\"></div></div></div></div></div>");
$templateCache.put("src/designer/templates/datasource-props.tpl.html","<div class=\"row-props\" ng-controller=\"DatasourcePropsController\"><div class=\"content-title\"><span>数据</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">属性</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"dataSource\">数据来源</label><div class=\"prop-control col-sm-8\"><select class=\"prop-select\" id=\"dataSource\" ng-change=\"onDataSourceChange(report.dataSource)\" ng-model=\"report.dataSource\" ng-options=\"i.dataSrcName for i in dataSources track by i.seqId\"><option value=\"\">-- 选择数据源 --</option></select></div></div></div><div class=\"prop-group\"><h1 class=\"square-pink\">可查询字段</h1><div class=\"form-group\"><div class=\"prop-control col-sm-12\"><label ng-repeat=\"field in fields\"><input type=\"checkbox\" ng-model=\"field.$checked\" ng-change=\"onFilterFieldStatusChange(field)\"> {{field.dataSrcItemLabel}}</label></div></div></div></div></div>");
$templateCache.put("src/designer/templates/designer.tpl.html","<div class=\"designer-menu assistant\" ng-class=\"{opened: sidemenu.opened}\"><div class=\"menu-inner\"><div class=\"menu-title\"><ul class=\"nav-tabs\"><li ng-class=\"{\'active\': sidemenu.activeTab.id === tab.id}\" ng-repeat=\"tab in sidemenu.tabs track by tab.id\"><a href=\"\" ng-click=\"sidemenu.changeTab(tab)\">{{tab.title}}</a></li></ul></div><div class=\"menu-content\"><div class=\"nav-content\"><div ng-include=\"sidemenu.activeTab.view.templateUrl\"></div></div></div></div></div><div class=\"designer-content\"><div class=\"designer-topbar assistant\"><a ng-click=\"$designer.preview()\" class=\"label label-primary\"><i class=\"fa fa-eye\"></i> 预览</a> <a class=\"label label-success\" ng-click=\"$designer.save()\"><i class=\"fa fa-save\"></i> 保存</a> <a href=\"\" class=\"pull-right\" ng-click=\"sidemenu.toggle($event)\"><span class=\"menu-button\"></span></a></div><div class=\"report-wrapper\" yao-scrollbar=\"\"><div class=\"report-header\"><h1><span yao-editable=\"$designer.report.title\"></span></h1><h3 yao-editable=\"$designer.report.subtitle\"></h3><span class=\"export-btn\"><button class=\"btn btn-info\">导出</button></span></div><div class=\"report-body\" ng-class=\"[$designer.cursor]\"><div ng-if=\"$designer.report.blocs.length <= 0\" class=\"empty-prompt assistant\" ng-click=\"$designer.addBloc()\"><h3>没有组件!</h3><p>此处是报表设计的预览界面，当前还没有任何可用于预览的组件，点击添加组件。</p></div></div></div><div class=\"widget-selector\" ng-show=\"$designer.widgetSelector.enable\"><ul class=\"widget-shortcut-list\"><li ng-click=\"$designer.widgetSelector.select(widget)\" ng-class=\"{\'active\': $designer.widgetSelector.selectedWidget === widget}\" ng-repeat=\"widget in $designer.widgetSelector.widgets\"><span class=\"shortcut-icon {{widget.name}}-icon\"></span></li><li><span class=\"shortcut-icon plus-icon\"></span></li></ul></div></div>");
$templateCache.put("src/designer/templates/edit.tpl.html","<div ct-report-designer=\"\" report-id=\"$state.params.reportId\"></div>");
$templateCache.put("src/designer/templates/list.tpl.html","<div class=\"report-list-header\"><div><h5 class=\"v-line-title\">报表分组</h5><ul class=\"report-groups\"><li ng-class=\"{active: selectedGroupId === group.id}\" ng-repeat=\"group in groups track by group.id\"><a ng-click=\"changeGroup(group)\">{{group.name}}</a></li></ul><span class=\"pull-right\"><span class=\"btn btn-light-grey\"><i class=\"fa fa-refresh\"></i>刷新</span> <button class=\"btn btn-info\" ui-sref=\"collaborate.reports.add\">创建报表</button></span></div><div><form class=\"form-inline\"><select class=\"form-control\"><option>按创建时间排序</option><option>按修改时间排序</option><option>按报表名称排序</option></select><div class=\"form-group\"><input type=\"text\" class=\"form-control text-input\" placeholder=\"按报表名称搜索\"></div><button class=\"btn btn-info\">搜索</button></form></div></div><div class=\"report-list-body\"><ul class=\"report-list\"><li ng-repeat=\"report in reports track by report.id\"><div class=\"report-list-item\"><div class=\"item-title\"><span>{{report.reportName}}</span></div><div class=\"item-actions\"><span class=\"item-action\"><a ui-sref=\"collaborate.reports.edit({reportId: 123})\"><i class=\"fa fa-pencil\"></i>修改</a></span> <span class=\"item-action\" ng-click=\"preview(report.reportDef)\"><i class=\"fa fa-eye\"></i>查看</span> <span class=\"item-action\"><i class=\"fa fa-external-link\"></i>导出</span> <span class=\"item-action\"><i class=\"fa fa-files-o\"></i>复制</span> <span class=\"item-action red\"><i class=\"fa fa-trash\"></i>删除</span></div></div></li></ul></div>");
$templateCache.put("src/designer/templates/preview.tpl.html","<div class=\"report-preview\" yao-scrollbar=\"\"><pre>{{$report | json:3}}</pre><div class=\"report-wrapper\"><div class=\"report-header\"><h1>{{$report.title}}</h1><h3>{{$report.subtitle}}</h3><span class=\"export-btn\"><button class=\"btn btn-info\">导出</button></span></div><form name=\"filterForm\" class=\"report-filter-form form-horizontal\" ng-if=\"$report.filterFields.length > 0\"><div class=\"col-md-6\" ng-repeat=\"field in $report.filterFields\"><div class=\"form-group\"><label for=\"field-input-{{field.seqId}}\" class=\"col-sm-4 control-label\">{{field.dataSrcItemLabel}}:</label><div class=\"col-sm-8\"><input type=\"text\" ng-model=\"filterParams[field.dataSrcItemName]\" name=\"{{field.dataSrcItemName}}\" class=\"form-control\" id=\"field-input-{{field.seqId}}\" ng-if=\"field.inputType === \'text\'\"><select class=\"form-control\" ng-model=\"filterParams[field.dataSrcItemName]\" name=\"{{field.dataSrcItemName}}\" id=\"field-input-{{field.seqId}}\" ng-if=\"field.inputType === \'select\'\"><option value=\"\">请选择</option><option value=\"{{o.name}}\" ng-repeat=\"o in getOptionData(field.seqId)\">{{o.name}}</option></select></div></div></div><div class=\"col-md-12\"><button ng-click=\"refreshReport()\" class=\"btn btn-success pull-right\"><i class=\"fa fa-search\"></i>查询</button></div></form><div class=\"report-body\"><div class=\"report-bloc-wrapper\" ng-repeat=\"bloc in $report.blocs\"><div class=\"report-bloc\"><div class=\"report-row col-md-{{row.size || 12}}\" ng-class=\"{\'no-padding\': row.size === 12}\" ng-repeat=\"row in bloc.layout.rows\"><div class=\"row-content\"><div class=\"report-col col-xs-{{col.size || 12}}\" ng-repeat=\"col in row.cols\"><div class=\"col-content\"><div ebp-report-widget=\"getWidget(col.content.id)\" report=\"$report\"></div></div></div></div></div></div></div></div></div></div><div class=\"report-preview-actions\"><button ng-click=\"$preview.close()\" class=\"btn btn-sup btn-material-pink\"><i class=\"fa fa-close\"></i> 关闭</button> <button ng-click=\"$preview.print()\" class=\"btn btn-sup btn-primary\"><i class=\"fa fa-print\"></i> 打印</button> <button ng-click=\"$preview.exportHTML()\" class=\"btn btn-sup btn-success\"><i class=\"fa fa-external-link\"></i> 导出HTML文本</button></div>");
$templateCache.put("src/designer/templates/report-props.tpl.html","<div class=\"row-props\"><div class=\"content-title\"><span>报表</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">属性</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"reportTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"$designer.report.title\" id=\"reportTitle\"></div></div><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"reportSubtitle\">说明</label><div class=\"prop-control col-sm-8\"><textarea class=\"prop-textarea\" ng-model=\"$designer.report.subtitle\" id=\"reportSubtitle\"></textarea></div></div></div></div></div>");
$templateCache.put("src/designer/templates/row-props.tpl.html","<div class=\"row-props\"><div class=\"content-title\"><span>行</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">样式</h1><div class=\"form-group\" ng-init=\"selected = $designer.selectedItem.cols.length\"><label class=\"prop-label col-sm-4\" for=\"columnsSel\">列数</label><div class=\"prop-control col-sm-8\"><select class=\"prop-select\" id=\"columnsSel\" ng-change=\"$designer.selectedItem.changeColsTo(selected)\" ng-model=\"selected\" ng-options=\"i for i in [1,2,3,4,6]\"></select></div></div></div></div></div>");
$templateCache.put("src/designer/templates/table-props.tpl.html","<div class=\"chart-props\" ng-controller=\"TablePropsController\"><div class=\"content-title\"><span>{{$table.title}}</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">设置</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"tableTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"config.title\" id=\"tableTitle\"></div></div></div><div class=\"prop-group\"><h1 class=\"square-pink\">表头属性</h1><div class=\"form-group\"><div class=\"prop-control col-sm-12\"><label ng-repeat=\"field in fields\"><input type=\"checkbox\" ng-model=\"field.$checked\" ng-change=\"onFieldStatusChange(field)\"> {{field.dataSrcItemLabel}}</label></div></div></div></div></div>");}]);