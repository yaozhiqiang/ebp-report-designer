/**
 * Created by yaoshining on 16/3/10.
 */
class TreeTableDemoController {

    constructor($scope) {
        'ngInject';
        $scope.treeTable = {
            expandAll: false,
            colDefs: [{
                name: 'name',
                title: '名称',
                width: 300,
                index: 2,
                expandable: true,
                checkable: true
            }, {
                name: 'details',
                title: '详情',
                index: 3
            }, {
                name: 'startTime',
                title: '开始时间',
                index: 6,
                width: 120
            }, {
                name: 'endTime',
                title: '结束时间',
                index: 7,
                width: 120
            }, {
                name: 'progress',
                title: '进度',
                index: 8,
                type: 'progressBar'
            }, {
                type: 'crud',
                index: 4
            }],
            events: {
                edit: function(node) {
                    let model = node.model;
                    setTimeout(function() {
                        model.name = 'qweqe';
                        node.update(model);
                    }, 1000);
                },
                add: function(node, children) {
                    setTimeout(function() {
                        var newNode = {
                            id: 999,
                            name: '新插入的节点',
                            details: '新插入节点的详情',
                            startTime: '2016-05-06',
                            endTime: '2016-05-06',
                            progress: 59
                        }, index = 0;
                        if(node) {
                            node.insert(index, newNode);
                        } else {
                            $scope.treeTable.insert(index, newNode);
                        }
                    }, 1000);
                },
                remove: function(node) {
                    setTimeout(function() {
                        node.remove();
                    }, 1000);
                }
            },
            dataSource: {
                read: {
                    url: '/data/:id.json',
                    params: {
                        name: '123'
                    }
                }
            }
        };

        $scope.approval = function(node) {
            // node.shiftUp();
            // node.upgrade();
            // $scope.treeTable.expandAll();
            $scope.treeTable.upgrade($scope.treeTable.checkedNodes);
        };

        $scope.adjust = function(node) {
            // node.shiftDown();
            // node.degrade(function(callback) {
            //     callback();
            // });
            // $scope.treeTable.collapseAll();
            $scope.treeTable.degrade($scope.treeTable.checkedNodes, function(callback) {
                callback();
            });
        };

    }

}

export default TreeTableDemoController;