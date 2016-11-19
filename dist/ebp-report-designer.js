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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _core) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _core2 = _interopRequireDefault(_core);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var ebpReportDesigner = angular.module('ebp.report.designer', ['ngResource', _core2.default.name, 'ebp-ui', 'angular-yao-utils']); /**
	                                                                                                                                        * Created by yao on 15/12/4.
	                                                                                                                                        */
	    exports.default = ebpReportDesigner;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _config, _chartsProps, _tableProps, _datasourceProps, _datasource, _report, _designer, _widget) {
	          'use strict';

	          Object.defineProperty(exports, "__esModule", {
	                    value: true
	          });

	          var config = _interopRequireWildcard(_config);

	          var _chartsProps2 = _interopRequireDefault(_chartsProps);

	          var _tableProps2 = _interopRequireDefault(_tableProps);

	          var _datasourceProps2 = _interopRequireDefault(_datasourceProps);

	          var _designer2 = _interopRequireDefault(_designer);

	          var _widget2 = _interopRequireDefault(_widget);

	          function _interopRequireDefault(obj) {
	                    return obj && obj.__esModule ? obj : {
	                              default: obj
	                    };
	          }

	          function _interopRequireWildcard(obj) {
	                    if (obj && obj.__esModule) {
	                              return obj;
	                    } else {
	                              var newObj = {};

	                              if (obj != null) {
	                                        for (var key in obj) {
	                                                  if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                                        }
	                              }

	                              newObj.default = obj;
	                              return newObj;
	                    }
	          }

	          /**
	           * Created by yaoshining on 16/3/1.
	           */
	          var coreModule = angular.module('ebp.report.designer.core', []);
	          coreModule.constant('defaultSettings', config.treeTableSettings).factory('reportDatasourceService', _datasource.ReportDatasourceFactory).factory('reportService', _report.ReportServiceFactory).controller('ChartPropsController', _chartsProps2.default).controller('TablePropsController', _tableProps2.default).controller('DatasourcePropsController', _datasourceProps2.default).directive('ebpReportWidget', _widget2.default).directive('ebpReportDesigner', _designer2.default);

	          coreModule.run(function (yaoGuid) {
	                    'ngInject';

	                    window.guid = yaoGuid;
	          });

	          exports.default = coreModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    /**
	     * Created by yao on 15/12/9.
	     */
	    var directiveNames = exports.directiveNames = {
	        ebpTreeTable: 'ebpTreetable',
	        ebpTreeTableCol: 'ebpTreetableCol',
	        ebpTreeTableNode: 'ebpTreetableNode',
	        ebpTreeTableCell: 'ebpTreetableCell',
	        ebpTreeTableHeader: 'columnheader'
	    };

	    var treeTableSettings = exports.treeTableSettings = {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var ChartPropsController = function ChartPropsController($scope) {
	        'ngInject';

	        _classCallCheck(this, ChartPropsController);

	        $scope.$chart = $scope.$designer.selectedItem;
	        $scope.config = $scope.$chart.config;
	    };

	    exports.default = ChartPropsController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var TablePropsController = function TablePropsController($scope, reportDatasourceService) {
	        'ngInject';

	        _classCallCheck(this, TablePropsController);

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
	                            matched.$checked = true;
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
	            } else {
	                _.remove($scope.config.displayFields, function (f) {
	                    return f.seqId === field.seqId;
	                });
	            }
	        };
	    };

	    exports.default = TablePropsController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var DatasourcePropsController = function DatasourcePropsController($scope, reportDatasourceService) {
	        'ngInject';

	        _classCallCheck(this, DatasourcePropsController);

	        var report = $scope.report = $scope.$designer.report;

	        $scope.fields = [];

	        if (report.dataSource) {
	            reportDatasourceService.getFields(report.dataSource.seqId).then(function (fields) {
	                $scope.fields = fields;
	                if (angular.isArray(report.filterFields)) {
	                    report.filterFields.forEach(function (f) {
	                        var matched = _.find($scope.fields, { 'seqId': f.seqId });
	                        if (matched) {
	                            matched.$checked = true;
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
	            } else {
	                _.remove(report.filterFields, function (f) {
	                    return f.seqId === field.seqId;
	                });
	            }
	        };
	    };

	    exports.default = DatasourcePropsController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ReportDatasourceFactory = ReportDatasourceFactory;
	    /**
	     * Created by yaoshining on 2016/11/1.
	     */
	    function ReportDatasourceFactory($http, $q) {

	        function getFields(srcId) {
	            var deferred = $q.defer();
	            // const url = '/plt/dataSource/queryItem';
	            var url = '/data/reports/datasource/1.json';
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
	            // const url = '/plt/dataSource/getAllDataSrcSource';
	            var url = '/data/reports/datasource/all.json';
	            $http.get(url).then(function (res) {
	                deferred.resolve(res.data);
	            }, function (res) {
	                deferred.reject(res);
	            });
	            return deferred.promise;
	        }

	        return { getFields: getFields, getDataSources: getDataSources };
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    "use strict";

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ReportServiceFactory = ReportServiceFactory;
	    /**
	     * Created by yaoshining on 2016/11/11.
	     */
	    function ReportServiceFactory($http, $q) {

	        function save(report) {
	            var deferred = $q.defer();
	            var url = '/plt/reportTpl/addReportTpl';
	            // const url = '/data/reports/datasource/all.json';
	            $http.post(url, {
	                reportName: report.title,
	                reportTypeSeqId: 123,
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

	        return { save: save };
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _WidgetSelector, _SideMenu, _Report, _Bloc) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _WidgetSelector2 = _interopRequireDefault(_WidgetSelector);

	    var _SideMenu2 = _interopRequireDefault(_SideMenu);

	    var _Report2 = _interopRequireDefault(_Report);

	    var _Bloc2 = _interopRequireDefault(_Bloc);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function ReportDesignerDirectiveFacroty() {

	        function linkFunc(scope, elem, attrs, designer) {
	            elem.addClass('report-designer');
	            var reportElem = elem.find('.report-wrapper'),
	                headerElem = reportElem.find('.report-header'),
	                bodyElem = reportElem.find('.report-body');

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

	    var DesignerController = function () {
	        function DesignerController($scope, $element, yaoFullscreen, reportService) {
	            'ngInject';

	            var _this = this;

	            _classCallCheck(this, DesignerController);

	            this.widgetSelector = _WidgetSelector2.default.$invoke(this, { $scope: $scope, $element: $element });
	            this.sidemenu = $scope.sidemenu = _SideMenu2.default.$invoke(this, { $scope: $scope, $element: $element });
	            this.report = _Report2.default.$invoke(this, { $scope: $scope, $element: $element });
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
	                    controller: PreviewController,
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

	        _createClass(DesignerController, [{
	            key: 'addBloc',
	            value: function addBloc() {
	                var block = new _Bloc2.default(this.report);
	                this.report.insertBloc(block);
	            }
	        }]);

	        return DesignerController;
	    }();

	    var PreviewController = function PreviewController($scope, yaoFullscreen, report, $element) {
	        'ngInject';

	        _classCallCheck(this, PreviewController);

	        $scope.$report = report;
	        this.close = function () {
	            yaoFullscreen.close();
	        };

	        this.exportHTML = function () {
	            return angular.download($element.find('.report-wrapper')[0]);
	        };

	        this.print = function () {
	            // const reportWrapper = $element.find('.report-wrapper');
	            // reportWrapper.addClass('print-a4');
	            // $(window).resize();
	            // setTimeout(() => print(), 100);
	            print();
	        };

	        // if(matchMedia) {
	        //     matchMedia('print').addListener(mql => {
	        //         const reportWrapper = $element.find('.report-wrapper');
	        //         if(!mql.matches) {
	        //             reportWrapper.removeClass('print-a4');
	        //         }
	        //     });
	        // }
	    };

	    exports.default = ReportDesignerDirectiveFacroty;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Widgets) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var widgets = _interopRequireWildcard(_Widgets);

	    function _interopRequireWildcard(obj) {
	        if (obj && obj.__esModule) {
	            return obj;
	        } else {
	            var newObj = {};

	            if (obj != null) {
	                for (var key in obj) {
	                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                }
	            }

	            newObj.default = obj;
	            return newObj;
	        }
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function WidgetSelector() {

	        var self = this;

	        var WidgetSelector = function () {
	            function WidgetSelector() {
	                var _this = this;

	                _classCallCheck(this, WidgetSelector);

	                this.enable = false;
	                this.widgets = widgets;
	                this.selectedWidget = widgets.BarChart;
	                Object.defineProperties(self, {
	                    cursor: {
	                        get: function get() {
	                            if (_this.enable) {
	                                return 'cursor-' + _this.selectedWidget.name;
	                            }
	                            return '';
	                        }
	                    }
	                });
	            }

	            _createClass(WidgetSelector, [{
	                key: 'toggle',
	                value: function toggle() {
	                    this.enable = !this.enable;
	                }
	            }, {
	                key: 'select',
	                value: function select(widget) {
	                    this.selectedWidget = widget;
	                }
	            }]);

	            return WidgetSelector;
	        }();

	        return new WidgetSelector();
	    }

	    exports.default = WidgetSelector;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(11), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _BarChart, _LineChart, _PieChart, _Table) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  Object.keys(_BarChart).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _BarChart[key];
	      }
	    });
	  });
	  Object.keys(_LineChart).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _LineChart[key];
	      }
	    });
	  });
	  Object.keys(_PieChart).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _PieChart[key];
	      }
	    });
	  });
	  Object.keys(_Table).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _Table[key];
	      }
	    });
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Chart2) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.BarChart = undefined;

	    var _Chart3 = _interopRequireDefault(_Chart2);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var BarChart = exports.BarChart = function (_Chart) {
	        _inherits(BarChart, _Chart);

	        _createClass(BarChart, null, [{
	            key: 'name',
	            get: function get() {
	                return 'barchart';
	            }
	        }]);

	        function BarChart() {
	            _classCallCheck(this, BarChart);

	            var _this = _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this));

	            _this.type = _Chart2.ChartType.BAR;
	            _this.name = BarChart.name;
	            _this.title = '柱状图';
	            return _this;
	        }

	        return BarChart;
	    }(_Chart3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Widget2) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ChartType = undefined;

	    var _Widget3 = _interopRequireDefault(_Widget2);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _get = function get(object, property, receiver) {
	        if (object === null) object = Function.prototype;
	        var desc = Object.getOwnPropertyDescriptor(object, property);

	        if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);

	            if (parent === null) {
	                return undefined;
	            } else {
	                return get(parent, property, receiver);
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;

	            if (getter === undefined) {
	                return undefined;
	            }

	            return getter.call(receiver);
	        }
	    };

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var Chart = function (_Widget) {
	        _inherits(Chart, _Widget);

	        function Chart() {
	            _classCallCheck(this, Chart);

	            var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this));

	            _this.category = 'chart';
	            _this.type = null;
	            _this.title = '图表';
	            _this.config = {
	                title: '未命名图表',
	                dataSource: {
	                    url: '',
	                    params: []
	                }
	            };
	            return _this;
	        }

	        _createClass(Chart, [{
	            key: 'render',
	            value: function render() {
	                _get(Chart.prototype.__proto__ || Object.getPrototypeOf(Chart.prototype), 'render', this).call(this);
	                this.element.on('click', clickHandler.bind(this));
	                return this.element;
	            }
	        }]);

	        return Chart;
	    }(_Widget3.default);

	    function clickHandler() {
	        var sidemenu = this.$designer.sidemenu;
	        sidemenu.changeTab(2, 'src/designer/templates/charts-props.tpl.html');
	        this.$designer.select(this);
	    }

	    var ChartType = exports.ChartType = {
	        BAR: 'bar',
	        LINE: 'line',
	        PIE: 'pie'
	    };

	    exports.default = Chart;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    var Widget = function () {
	        function Widget() {
	            _classCallCheck(this, Widget);

	            this.id = guid();
	            this.category = null;
	            this.name = null;
	            this.title = '组件';
	            var element = $('<div>').addClass('report-widget');
	            var _report = null;
	            Object.defineProperties(this, {
	                element: {
	                    get: function get() {
	                        return element;
	                    }
	                },
	                report: {
	                    set: function set(report) {
	                        return _report = report;
	                    },
	                    get: function get() {
	                        return _report;
	                    }
	                }
	            });
	        }

	        _createClass(Widget, [{
	            key: 'render',
	            value: function render() {
	                var _this = this;

	                this.element.attr('title', this.title);
	                this.element.append($('<div>').addClass('widget-' + this.name));
	                var removeButton = $('<div>').addClass('widget-remove-button').on('click', function () {
	                    alert(2);
	                }).hover(function () {
	                    _this.element.addClass('warning');
	                }, function () {
	                    _this.element.removeClass('warning');
	                });
	                this.element.append(removeButton);
	                return this.element;
	            }
	        }]);

	        return Widget;
	    }();

	    exports.default = Widget;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Chart2) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.LineChart = undefined;

	    var _Chart3 = _interopRequireDefault(_Chart2);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var LineChart = exports.LineChart = function (_Chart) {
	        _inherits(LineChart, _Chart);

	        _createClass(LineChart, null, [{
	            key: 'name',
	            get: function get() {
	                return 'linechart';
	            }
	        }]);

	        function LineChart() {
	            _classCallCheck(this, LineChart);

	            var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this));

	            _this.type = _Chart2.ChartType.LINE;
	            _this.name = LineChart.name;
	            _this.title = '线图';
	            return _this;
	        }

	        return LineChart;
	    }(_Chart3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Chart2) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.PieChart = undefined;

	    var _Chart3 = _interopRequireDefault(_Chart2);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var PieChart = exports.PieChart = function (_Chart) {
	        _inherits(PieChart, _Chart);

	        _createClass(PieChart, null, [{
	            key: 'name',
	            get: function get() {
	                return 'piechart';
	            }
	        }]);

	        function PieChart() {
	            _classCallCheck(this, PieChart);

	            var _this = _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call(this));

	            _this.type = _Chart2.ChartType.PIE;
	            _this.name = PieChart.name;
	            _this.title = '饼图';
	            return _this;
	        }

	        return PieChart;
	    }(_Chart3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Widget2) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.Table = undefined;

	    var _Widget3 = _interopRequireDefault(_Widget2);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _get = function get(object, property, receiver) {
	        if (object === null) object = Function.prototype;
	        var desc = Object.getOwnPropertyDescriptor(object, property);

	        if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);

	            if (parent === null) {
	                return undefined;
	            } else {
	                return get(parent, property, receiver);
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;

	            if (getter === undefined) {
	                return undefined;
	            }

	            return getter.call(receiver);
	        }
	    };

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var Table = exports.Table = function (_Widget) {
	        _inherits(Table, _Widget);

	        _createClass(Table, null, [{
	            key: 'name',
	            get: function get() {
	                return 'table';
	            }
	        }]);

	        function Table() {
	            _classCallCheck(this, Table);

	            var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

	            _this.category = 'table';
	            _this.name = Table.name;
	            _this.title = '表格';
	            _this.config = {
	                title: '未命名表格',
	                dataSource: {
	                    url: '',
	                    params: []
	                },
	                displayFields: []
	            };
	            return _this;
	        }

	        _createClass(Table, [{
	            key: 'render',
	            value: function render() {
	                _get(Table.prototype.__proto__ || Object.getPrototypeOf(Table.prototype), 'render', this).call(this);
	                this.element.on('click', clickHandler.bind(this));
	                return this.element;
	            }
	        }]);

	        return Table;
	    }(_Widget3.default);

	    function clickHandler() {
	        var sidemenu = this.$designer.sidemenu;
	        sidemenu.changeTab(2, 'src/designer/templates/table-props.tpl.html');
	        this.$designer.select(this);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yaoshining on 16/8/10.
	     */

	    function SideMenu($element, $scope, $timeout) {
	        'ngInject';

	        var opened = false,
	            tabs = [{
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
	            title: '组件'
	        }];
	        var activeTab = tabs[0];

	        var Panel = function () {
	            function Panel() {
	                _classCallCheck(this, Panel);

	                $element.find('.designer-menu').on('click', function (event) {
	                    return event.stopPropagation();
	                });
	            }

	            _createClass(Panel, [{
	                key: 'toggle',
	                value: function toggle(event) {
	                    event.stopPropagation();
	                    $element.find('.menu-button').toggleClass('opened');
	                    opened = !opened;
	                }
	            }, {
	                key: 'changeTab',
	                value: function changeTab(tab, templateUrl) {
	                    if ((typeof tab === 'undefined' ? 'undefined' : _typeof(tab)) == 'object') {
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
	                }
	            }, {
	                key: 'refresh',
	                value: function refresh() {
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
	                }
	            }, {
	                key: 'opened',
	                get: function get() {
	                    return opened;
	                }
	            }, {
	                key: 'tabs',
	                get: function get() {
	                    return tabs;
	                }
	            }, {
	                key: 'activeTab',
	                get: function get() {
	                    return activeTab;
	                }
	            }]);

	            return Panel;
	        }();

	        return new Panel();
	    }

	    exports.default = SideMenu;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yaoshining on 16/8/10.
	     */
	    function Report($scope, $element) {
	        'ngInject';

	        var Report = function () {
	            function Report() {
	                var _this = this;

	                _classCallCheck(this, Report);

	                $.extend(this, {
	                    title: '未命名报表',
	                    subtitle: '关于此报表的详细说明',
	                    blocs: [],
	                    widgets: [],
	                    getWidget: function getWidget(id) {
	                        return _.find(_this.widgets, { id: id });
	                    }
	                });
	                Object.defineProperties(this, {
	                    $scope: {
	                        get: function get() {
	                            return $scope;
	                        }
	                    }
	                });
	            }

	            _createClass(Report, [{
	                key: 'insertBloc',
	                value: function insertBloc(bloc) {
	                    $element.find('.report-body').append(bloc.render());
	                    this.blocs.push(bloc);
	                }
	            }, {
	                key: 'insertBlocAfter',
	                value: function insertBlocAfter(pre, bloc) {
	                    var i = $.inArray(pre, this.blocs) + 1;
	                    if (i === 0) {
	                        this.insertBloc(bloc);
	                    } else {
	                        bloc.render().insertAfter(pre.element);
	                        this.blocs.splice(i, 0, bloc);
	                    }
	                }
	            }, {
	                key: 'removeBloc',
	                value: function removeBloc(bloc) {
	                    var _this2 = this;

	                    var i = -1;
	                    if ((i = $.inArray(bloc, this.blocs)) > -1) {
	                        $scope.$apply(function () {
	                            _this2.blocs.splice(i, 1);
	                        });
	                    }
	                }
	            }]);

	            return Report;
	        }();

	        var report = new Report(),
	            self = this;
	        Object.defineProperties(report, {
	            $designer: {
	                get: function get() {
	                    return self;
	                }
	            }
	        });
	        return report;
	    }

	    exports.default = Report;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layouts) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var Layouts = _interopRequireWildcard(_Layouts);

	    function _interopRequireWildcard(obj) {
	        if (obj && obj.__esModule) {
	            return obj;
	        } else {
	            var newObj = {};

	            if (obj != null) {
	                for (var key in obj) {
	                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	                }
	            }

	            newObj.default = obj;
	            return newObj;
	        }
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    var Bloc = function () {
	        function Bloc(report) {
	            var _this = this;

	            _classCallCheck(this, Bloc);

	            var _layout = null;
	            Object.defineProperties(this, {
	                report: {
	                    get: function get() {
	                        return report;
	                    }
	                },
	                layout: {
	                    get: function get() {
	                        return _layout;
	                    },
	                    set: function set(layout) {
	                        if (_layout) {
	                            _this.removeLayout();
	                        }
	                        _layout = layout;
	                        var addBloc = $('<div>').addClass('add-bloc-btn').text('+').on('click', function () {
	                            var bloc = new Bloc(_this.report);
	                            _this.report.insertBlocAfter(_this, bloc);
	                        }),
	                            el = layout.render();
	                        el.append(addBloc);
	                        _this.element.append(el);
	                    }
	                }
	            });
	        }

	        _createClass(Bloc, [{
	            key: 'render',
	            value: function render() {
	                this.element = renderEmptyElement.bind(this).call();
	                return this.element;
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.element.remove();
	            }
	        }, {
	            key: 'removeLayout',
	            value: function removeLayout() {
	                this.layout.container.remove();
	            }
	        }, {
	            key: 'toJSON',
	            value: function toJSON() {
	                var obj = $.extend({}, this);
	                delete obj.element;
	                delete obj.selectPane;
	                obj.layout = this.layout;
	                return obj;
	            }
	        }]);

	        return Bloc;
	    }();

	    function renderEmptyElement() {
	        var _this2 = this;

	        var root = $('<div>').addClass('report-bloc-wrapper');
	        this.selectPane = new SelectPane(this);
	        root.append(this.selectPane.render());
	        setTimeout(function () {
	            _this2.selectPane.open();
	        }, 0);
	        $compile(root)(this.report.$scope);
	        return root;
	    }

	    var SelectPane = function () {
	        function SelectPane(bloc) {
	            _classCallCheck(this, SelectPane);

	            Object.defineProperties(this, {
	                bloc: {
	                    get: function get() {
	                        return bloc;
	                    }
	                },
	                report: {
	                    get: function get() {
	                        return bloc.report;
	                    }
	                }
	            });
	        }

	        _createClass(SelectPane, [{
	            key: 'render',
	            value: function render() {
	                this.element = renderSelectPane.bind(this).call();
	                return this.element;
	            }
	        }, {
	            key: 'open',
	            value: function open() {
	                var _this3 = this;

	                this.element.addClass('opened');
	                $(document).one('click', function (event) {
	                    var parents = $(event.target).parents().addBack();
	                    if (parents.is('.select-pane')) {
	                        return false;
	                    }
	                    if (parents.is('.report-designer')) {
	                        _this3.close();
	                    }
	                });
	            }
	        }, {
	            key: 'close',
	            value: function close() {
	                var _this4 = this;

	                this.element.removeClass('opened');
	                if (!this.bloc.layout) {
	                    setTimeout(function () {
	                        _this4.bloc.destroy();
	                        _this4.report.removeBloc(_this4.bloc);
	                    }, 500);
	                }
	            }
	        }]);

	        return SelectPane;
	    }();

	    function renderSelectPane() {
	        var _this5 = this;

	        var pane = $('<div>').addClass('select-pane assistant');

	        var leftButton = $('\n            <span class="pull-left">\n                <i class="fa fa-angle-left"></i>\n            </span>\n        '),
	            rightButton = $('\n            <span class="pull-right">\n                <i class="fa fa-angle-right"></i>\n            </span>\n        '),
	            title = $('<div>').addClass('pane-title').append(leftButton).append(rightButton);

	        var body = $('<div>').addClass('pane-body');
	        var list = $('<ul>').addClass('pane-h-list');
	        angular.forEach(Layouts, function (Layout) {
	            var thumbnail = Layout.thumbnail;
	            list.append($('<li>').html(thumbnail));
	            thumbnail.on('click', function () {
	                _this5.bloc.layout = new Layout(_this5.bloc);
	            });
	        });
	        body.append(list);
	        pane.append(title).append(body);
	        pane.on('click', function (event) {
	            event.stopPropagation();
	        });
	        leftButton.on('click', function () {
	            var currentPosition = parseInt(list.css('margin-left')),
	                step = 300,
	                endPoint = 0;
	            currentPosition += step;
	            if (currentPosition > endPoint) {
	                currentPosition = endPoint;
	            }
	            list.stop(true, true).animate({
	                'margin-left': currentPosition
	            });
	        });
	        rightButton.on('click', function () {
	            var currentPosition = parseInt(list.css('margin-left')),
	                step = 300,
	                endPoint = body.width() - list.width() + 20;
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

	    exports.default = Bloc;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(21), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _OneColumn, _TwoColumn, _ThreeColumn, _FourColumn, _TwoToOne, _OneToTwo) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  Object.keys(_OneColumn).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _OneColumn[key];
	      }
	    });
	  });
	  Object.keys(_TwoColumn).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _TwoColumn[key];
	      }
	    });
	  });
	  Object.keys(_ThreeColumn).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _ThreeColumn[key];
	      }
	    });
	  });
	  Object.keys(_FourColumn).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _FourColumn[key];
	      }
	    });
	  });
	  Object.keys(_TwoToOne).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _TwoToOne[key];
	      }
	    });
	  });
	  Object.keys(_OneToTwo).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	      enumerable: true,
	      get: function () {
	        return _OneToTwo[key];
	      }
	    });
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.OneColumn = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var OneColumn = exports.OneColumn = function (_Layout) {
	        _inherits(OneColumn, _Layout);

	        _createClass(OneColumn, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-12"></div>\n            </div>\n        ');
	            }
	        }]);

	        function OneColumn(bloc) {
	            _classCallCheck(this, OneColumn);

	            var _this = _possibleConstructorReturn(this, (OneColumn.__proto__ || Object.getPrototypeOf(OneColumn)).call(this, bloc));

	            _this.addRow(new _Row2.default(12, 1));
	            return _this;
	        }

	        _createClass(OneColumn, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return OneColumn;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    /**
	     * Created by yaoshining on 16/8/12.
	     */

	    function generateContainer() {
	        var container = $('<div>').addClass('report-bloc');
	        return container;
	    }

	    var Layout = function () {
	        function Layout(bloc) {
	            _classCallCheck(this, Layout);

	            this.container = generateContainer();
	            this.rows = [];
	            Object.defineProperties(this, {
	                bloc: {
	                    get: function get() {
	                        return bloc;
	                    }
	                }
	            });
	        }

	        _createClass(Layout, [{
	            key: 'render',
	            value: function render() {
	                return this.container;
	            }
	        }, {
	            key: 'addRow',
	            value: function addRow(row) {
	                var _this = this;

	                Object.defineProperties(row, {
	                    layout: {
	                        get: function get() {
	                            return _this;
	                        }
	                    },
	                    $designer: {
	                        get: function get() {
	                            return _this.bloc.report.$designer;
	                        }
	                    }
	                });
	                this.rows.push(row);
	            }
	        }, {
	            key: 'toJSON',
	            value: function toJSON() {
	                var obj = $.extend({}, this);
	                delete obj.container;
	                return obj;
	            }
	        }]);

	        return Layout;
	    }();

	    exports.default = Layout;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Column) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.default = Row;

	    var _Column2 = _interopRequireDefault(_Column);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function Row(size, colNum) {
	        var _this = this;

	        var element = $('<div>').addClass('report-row'),
	            content = $('<div>').addClass('row-content'),
	            cols = [];
	        size = size || 12;

	        Object.defineProperties(this, {
	            cols: {
	                get: function get() {
	                    return cols;
	                }
	            },
	            element: {
	                get: function get() {
	                    return element;
	                }
	            }
	        });

	        $.extend(this, {
	            addColumn: function addColumn(col) {
	                Object.defineProperties(col, {
	                    $designer: {
	                        get: function get() {
	                            return _this.$designer;
	                        }
	                    }
	                });
	                cols.push(col);
	            },
	            render: function render() {
	                element.addClass('col-md-' + size).addClass(size === 12 ? 'no-padding' : '');
	                angular.forEach(cols, function (col, i) {
	                    return content.append(col.render(i));
	                });
	                element.html(content);
	                return element;
	            },
	            changeColsTo: function changeColsTo(num) {
	                cols.length = 0;
	                for (var i = 0; i < num; i++) {
	                    var column = new _Column2.default(12 / num);
	                    _this.addColumn(column);
	                }
	                content.empty();
	                _this.render();
	            },
	            toJSON: function toJSON() {
	                var obj = $.extend({}, _this);
	                obj.cols = cols;
	                obj.size = size;
	                return obj;
	            }
	        });

	        if (colNum) {
	            for (var i = 0; i < colNum; i++) {
	                var column = new _Column2.default(12 / colNum);
	                this.addColumn(column);
	            }
	        }

	        element.on({
	            'click': function click(e) {
	                if ($(e.target).parents().addBack().is('.report-widget')) {
	                    return;
	                }
	                var sidemenu = _this.$designer.sidemenu;
	                sidemenu.changeTab(2, 'src/designer/templates/row-props.tpl.html');
	                _this.$designer.select(_this);
	            },
	            'mouseover': function mouseover(e) {
	                if ($(e.target).parents().addBack().is('.report-widget')) {
	                    content.removeClass('hover-intent');
	                } else {
	                    content.addClass('hover-intent');
	                }
	            }
	        });

	        content.hover(function () {
	            content.addClass('hover-intent');
	        }, function () {
	            content.removeClass('hover-intent');
	        });
	    } /**
	       * Created by yaoshining on 16/8/12.
	       */
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.default = Column;
	    /**
	     * Created by yaoshining on 16/8/12.
	     */
	    function Column(size) {
	        var _this = this;

	        var element = $('<div>').addClass('report-col'),
	            content = $('<div>').addClass('col-content');
	        size = size || 12;

	        Object.defineProperties(this, {
	            size: {
	                get: function get() {
	                    return size;
	                }
	            }
	        });

	        $.extend(this, {
	            render: function render(i) {
	                element.addClass('col-xs-' + size);
	                element.addClass('num-' + i);
	                element.html(content);
	                return element;
	            },
	            toJSON: function toJSON() {
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
	                        get: function get() {
	                            return _this.$designer;
	                        }
	                    }
	                });
	                content.html(widget.render());
	            }
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.TwoColumn = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var TwoColumn = exports.TwoColumn = function (_Layout) {
	        _inherits(TwoColumn, _Layout);

	        _createClass(TwoColumn, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-6"></div>\n                <div class="col-6"></div>\n            </div>\n        ');
	            }
	        }]);

	        function TwoColumn(bloc) {
	            _classCallCheck(this, TwoColumn);

	            var _this = _possibleConstructorReturn(this, (TwoColumn.__proto__ || Object.getPrototypeOf(TwoColumn)).call(this, bloc));

	            _this.addRow(new _Row2.default(12, 2));
	            return _this;
	        }

	        _createClass(TwoColumn, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return TwoColumn;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ThreeColumn = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var ThreeColumn = exports.ThreeColumn = function (_Layout) {
	        _inherits(ThreeColumn, _Layout);

	        _createClass(ThreeColumn, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-4"></div>\n                <div class="col-4"></div>\n                <div class="col-4"></div>\n            </div>\n        ');
	            }
	        }]);

	        function ThreeColumn(bloc) {
	            _classCallCheck(this, ThreeColumn);

	            var _this = _possibleConstructorReturn(this, (ThreeColumn.__proto__ || Object.getPrototypeOf(ThreeColumn)).call(this, bloc));

	            _this.addRow(new _Row2.default(12, 3));
	            return _this;
	        }

	        _createClass(ThreeColumn, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return ThreeColumn;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.FourColumn = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var FourColumn = exports.FourColumn = function (_Layout) {
	        _inherits(FourColumn, _Layout);

	        _createClass(FourColumn, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-3"></div>\n                <div class="col-3"></div>\n                <div class="col-3"></div>\n                <div class="col-3"></div>\n            </div>\n        ');
	            }
	        }]);

	        function FourColumn(bloc) {
	            _classCallCheck(this, FourColumn);

	            var _this = _possibleConstructorReturn(this, (FourColumn.__proto__ || Object.getPrototypeOf(FourColumn)).call(this, bloc));

	            _this.addRow(new _Row2.default(12, 4));
	            return _this;
	        }

	        _createClass(FourColumn, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return FourColumn;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row, _Column) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.TwoToOne = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    var _Column2 = _interopRequireDefault(_Column);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var TwoToOne = exports.TwoToOne = function (_Layout) {
	        _inherits(TwoToOne, _Layout);

	        _createClass(TwoToOne, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-8"></div>\n                <div class="col-4"></div>\n            </div>\n        ');
	            }
	        }]);

	        function TwoToOne(bloc) {
	            _classCallCheck(this, TwoToOne);

	            var _this = _possibleConstructorReturn(this, (TwoToOne.__proto__ || Object.getPrototypeOf(TwoToOne)).call(this, bloc));

	            var row = new _Row2.default(12);
	            row.addColumn(new _Column2.default(8));
	            row.addColumn(new _Column2.default(4));
	            _this.addRow(row);
	            return _this;
	        }

	        _createClass(TwoToOne, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return TwoToOne;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(23), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _Layout2, _Row, _Column) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.OneToTwo = undefined;

	    var _Layout3 = _interopRequireDefault(_Layout2);

	    var _Row2 = _interopRequireDefault(_Row);

	    var _Column2 = _interopRequireDefault(_Column);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var OneToTwo = exports.OneToTwo = function (_Layout) {
	        _inherits(OneToTwo, _Layout);

	        _createClass(OneToTwo, null, [{
	            key: 'thumbnail',
	            get: function get() {
	                return $('\n            <div class="layout-thumbnail">\n                <div class="col-4"></div>\n                <div class="col-8"></div>\n            </div>\n        ');
	            }
	        }]);

	        function OneToTwo(bloc) {
	            _classCallCheck(this, OneToTwo);

	            var _this = _possibleConstructorReturn(this, (OneToTwo.__proto__ || Object.getPrototypeOf(OneToTwo)).call(this, bloc));

	            var row = new _Row2.default(12);
	            row.addColumn(new _Column2.default(4));
	            row.addColumn(new _Column2.default(8));
	            _this.addRow(row);
	            return _this;
	        }

	        _createClass(OneToTwo, [{
	            key: 'render',
	            value: function render() {
	                var _this2 = this;

	                angular.forEach(this.rows, function (row) {
	                    _this2.container.append(row.render());
	                });
	                return this.container;
	            }
	        }]);

	        return OneToTwo;
	    }(_Layout3.default);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(31), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _table, _chart) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function ReportWidgetDirectiveFactory() {

	        function linkFunc(scope, elem) {
	            var widget = scope.widget;
	            if (!widget) {
	                return false;
	            }
	            scope.$on('yaoFullscreen.afterRender', function () {
	                if (widget.category === 'chart') {
	                    _chart.renderChart.$invoke(this, { scope: scope, elem: elem, widget: widget });
	                }
	                if (widget.category === 'table') {
	                    _table.renderTable.$invoke(this, { scope: scope, elem: elem, widget: widget });
	                }
	            });
	        }

	        var directive = {
	            restrict: 'AE',
	            link: linkFunc,
	            scope: {
	                widget: '=ebpReportWidget'
	            }
	        };

	        return directive;
	    }

	    var ReportWidgetController = function ReportWidgetController() {
	        _classCallCheck(this, ReportWidgetController);
	    };

	    exports.default = ReportWidgetDirectiveFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.renderTable = renderTable;
	    /**
	     * Created by yaoshining on 2016/11/7.
	     */
	    function renderTable(scope, elem, $compile, widget, $http) {
	        var tableTitle = $('<div>').addClass('report-widget-title').text(widget.config.title);
	        var ebpTable = $('<div>', {
	            'ebp-table': '$tableView.ebpTable',
	            'settings': '$tableView.widgetSettings',
	            'ng-model': '$tableView.tableData'
	        });

	        var widgetSettings = {
	            "colDefs": getColDefs(widget)
	        };

	        scope.$tableView = {
	            tableData: [],
	            ebpTable: {},
	            widgetSettings: widgetSettings
	        };

	        // const url = '/pms/project/report/getReportData';
	        var url = '/data/reports/table/1.json'; // In cording to widget.report.dataSource object, get the data source url.;
	        $http.get(url, {
	            params: {
	                dataSrcId: 1,
	                widgetId: '4ac50dd7-a273-31fd-b16a-8f86d449ba2c'
	            }
	        }).then(function (res) {
	            scope.$tableView.tableData = res.data;
	            elem.append(tableTitle);
	            elem.append($compile(ebpTable)(scope));
	        });

	        function getColDefs(widget) {
	            var cols = [],
	                config = widget.config;
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
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.renderChart = renderChart;
	    /**
	     * Created by yaoshining on 2016/11/7.
	     */
	    function renderChart(elem, widget, $http, $window) {
	        'ngInject';

	        $http.get('/data/reports/salesVolumn.json').then(function (res) {
	            var result = res.data,
	                data = result.data;
	            elem.height(400);
	            if (typeof echarts === 'undefined') {
	                if ($window.requirejs && angular.isFunction($window.requirejs)) {
	                    $window.echarts = requirejs('echarts');
	                }
	            }
	            var chart = echarts.init(elem[0]),
	                config = widget.config;
	            var xAxis = [];
	            if (data.length > 0) {
	                xAxis = data[0].datapoints.map(function (point) {
	                    return point.x;
	                });
	            }
	            var options = {
	                title: {
	                    text: config.title
	                },
	                tooltip: {},
	                legend: {
	                    data: data.map(function (item) {
	                        return item.name;
	                    }),
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
	                        data: item.datapoints.map(function (point) {
	                            return point.y;
	                        })
	                    };
	                })
	            };

	            chart.setOption(options);
	            $(window).on('resize', function () {
	                chart.resize();
	            });

	            // if(matchMedia) {
	            //
	            //     matchMedia('screen').addListener(() => {
	            //         chart.resize();
	            //     });
	            //
	            //     matchMedia('print').addListener(() => {
	            //         chart.resize();
	            //     });
	            // }
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
angular.module("ebp.report.designer").run(["$templateCache", function($templateCache) {$templateCache.put("src/designer/templates/add.tpl.html","<div ct-report-designer=\"\"></div>");
$templateCache.put("src/designer/templates/charts-props.tpl.html","<div class=\"chart-props\" ng-controller=\"ChartPropsController\"><div class=\"content-title\"><span>{{$chart.title}}</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">设置</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"chartTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"config.title\" id=\"chartTitle\"></div></div></div></div></div>");
$templateCache.put("src/designer/templates/datasource-props.tpl.html","<div class=\"row-props\" ng-controller=\"DatasourcePropsController\"><div class=\"content-title\"><span>数据</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">属性</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"dataSource\">数据来源</label><div class=\"prop-control col-sm-8\"><select class=\"prop-select\" id=\"dataSource\" ng-change=\"onDataSourceChange(report.dataSource)\" ng-model=\"report.dataSource\" ng-options=\"i.dataSrcName for i in dataSources track by i.seqId\"><option value=\"\">-- 选择数据源 --</option></select></div></div></div><div class=\"prop-group\"><h1 class=\"square-pink\">可查询字段</h1><div class=\"form-group\"><div class=\"prop-control col-sm-12\"><label ng-repeat=\"field in fields\"><input type=\"checkbox\" ng-model=\"field.$checked\" ng-change=\"onFilterFieldStatusChange(field)\"> {{field.dataSrcItemLabel}}</label></div></div></div></div></div>");
$templateCache.put("src/designer/templates/designer.tpl.html","<div class=\"designer-menu assistant\" ng-class=\"{opened: sidemenu.opened}\"><div class=\"menu-inner\"><div class=\"menu-title\"><ul class=\"nav-tabs\"><li ng-class=\"{\'active\': sidemenu.activeTab.id === tab.id}\" ng-repeat=\"tab in sidemenu.tabs track by tab.id\"><a href=\"\" ng-click=\"sidemenu.changeTab(tab)\">{{tab.title}}</a></li></ul></div><div class=\"menu-content\"><div class=\"nav-content\"><div ng-include=\"sidemenu.activeTab.view.templateUrl\"></div></div></div></div></div><div class=\"designer-content\"><div class=\"designer-topbar assistant\"><a ng-click=\"$designer.preview()\" class=\"label label-primary\"><i class=\"fa fa-eye\"></i> 预览</a> <a class=\"label label-success\" ng-click=\"$designer.save()\"><i class=\"fa fa-save\"></i> 保存</a> <a href=\"\" class=\"pull-right\" ng-click=\"sidemenu.toggle($event)\"><span class=\"menu-button\"></span></a></div><div class=\"report-wrapper\" yao-scrollbar=\"\"><div class=\"report-header\"><h1><span yao-editable=\"$designer.report.title\"></span></h1><h3 yao-editable=\"$designer.report.subtitle\"></h3><span class=\"export-btn\"><button class=\"btn btn-info\">导出</button></span></div><div class=\"report-body\" ng-class=\"[$designer.cursor]\"><div ng-if=\"$designer.report.blocs.length <= 0\" class=\"empty-prompt assistant\" ng-click=\"$designer.addBloc()\"><h3>没有组件!</h3><p>此处是报表设计的预览界面，当前还没有任何可用于预览的组件，点击添加组件。</p></div></div></div><div class=\"widget-selector\" ng-show=\"$designer.widgetSelector.enable\"><ul class=\"widget-shortcut-list\"><li ng-click=\"$designer.widgetSelector.select(widget)\" ng-class=\"{\'active\': $designer.widgetSelector.selectedWidget === widget}\" ng-repeat=\"widget in $designer.widgetSelector.widgets\"><span class=\"shortcut-icon {{widget.name}}-icon\"></span></li><li><span class=\"shortcut-icon plus-icon\"></span></li></ul></div></div>");
$templateCache.put("src/designer/templates/edit.tpl.html","<div ct-report-designer=\"\" report-id=\"$state.params.reportId\"></div>");
$templateCache.put("src/designer/templates/preview.tpl.html","<div class=\"report-preview\" yao-scrollbar=\"\"><pre>{{$report | json:3}}</pre><div class=\"report-wrapper\"><div class=\"report-header\"><h1>{{$report.title}}</h1><h3>{{$report.subtitle}}</h3><span class=\"export-btn\"><button class=\"btn btn-info\">导出</button></span></div><form class=\"report-filter-form form-horizontal\" ng-if=\"$report.filterFields.length > 0\"><div class=\"col-md-6\" ng-repeat=\"field in $report.filterFields\"><div class=\"form-group\"><label for=\"field-input-{{field.seqId}}\" class=\"col-sm-4 control-label\">{{field.dataSrcItemLabel}}:</label><div class=\"col-sm-8\"><input type=\"text\" class=\"form-control\" id=\"field-input-{{field.seqId}}\" ng-if=\"field.dataSrcItemType === \'text\'\"><select class=\"form-control\" id=\"field-input-{{field.seqId}}\" ng-if=\"field.dataSrcItemType === \'select\'\"><option>选项1</option><option>选项2</option><option>选项3</option><option>选项4</option></select></div></div></div></form><div class=\"report-body\"><div class=\"report-bloc-wrapper\" ng-repeat=\"bloc in $report.blocs\"><div class=\"report-bloc\"><div class=\"report-row col-md-{{row.size || 12}}\" ng-class=\"{\'no-padding\': row.size === 12}\" ng-repeat=\"row in bloc.layout.rows\"><div class=\"row-content\"><div class=\"report-col col-xs-{{col.size || 12}}\" ng-repeat=\"col in row.cols\"><div class=\"col-content\"><div ebp-report-widget=\"$report.getWidget(col.content.id)\"></div></div></div></div></div></div></div></div></div></div><div class=\"report-preview-actions\"><button ng-click=\"$preview.close()\" class=\"btn btn-sup btn-danger\"><i class=\"fa fa-close\"></i> 关闭</button> <button ng-click=\"$preview.print()\" class=\"btn btn-sup btn-primary\"><i class=\"fa fa-print\"></i> 打印</button> <button ng-click=\"$preview.exportHTML()\" class=\"btn btn-sup btn-success\"><i class=\"fa fa-external-link\"></i> 导出HTML文本</button></div>");
$templateCache.put("src/designer/templates/report-props.tpl.html","<div class=\"row-props\"><div class=\"content-title\"><span>报表</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">属性</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"reportTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"$designer.report.title\" id=\"reportTitle\"></div></div><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"reportSubtitle\">说明</label><div class=\"prop-control col-sm-8\"><textarea class=\"prop-textarea\" ng-model=\"$designer.report.subtitle\" id=\"reportSubtitle\"></textarea></div></div></div></div></div>");
$templateCache.put("src/designer/templates/row-props.tpl.html","<div class=\"row-props\"><div class=\"content-title\"><span>行</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">样式</h1><div class=\"form-group\" ng-init=\"selected = $designer.selectedItem.cols.length\"><label class=\"prop-label col-sm-4\" for=\"columnsSel\">列数</label><div class=\"prop-control col-sm-8\"><select class=\"prop-select\" id=\"columnsSel\" ng-change=\"$designer.selectedItem.changeColsTo(selected)\" ng-model=\"selected\" ng-options=\"i for i in [1,2,3,4,6]\"></select></div></div></div></div></div>");
$templateCache.put("src/designer/templates/table-props.tpl.html","<div class=\"chart-props\" ng-controller=\"TablePropsController\"><div class=\"content-title\"><span>{{$table.title}}</span></div><div class=\"content-body\"><div class=\"prop-group\"><h1 class=\"square-blue\">设置</h1><div class=\"form-group\"><label class=\"prop-label col-sm-4\" for=\"tableTitle\">标题</label><div class=\"prop-control col-sm-8\"><input class=\"prop-input\" ng-model=\"config.title\" id=\"tableTitle\"></div></div></div><div class=\"prop-group\"><h1 class=\"square-pink\">表头属性</h1><div class=\"form-group\"><div class=\"prop-control col-sm-12\"><label ng-repeat=\"field in fields\"><input type=\"checkbox\" ng-model=\"field.$checked\" ng-change=\"onFieldStatusChange(field)\"> {{field.dataSrcItemLabel}}</label></div></div></div></div></div>");}]);