/**
 * Created by yao on 15/12/9.
 */
// import * as angular from 'angular';

export const directiveNames = {
    ebpTreeTable: 'ebpTreetable',
    ebpTreeTableCol: 'ebpTreetableCol',
    ebpTreeTableNode: 'ebpTreetableNode',
    ebpTreeTableCell: 'ebpTreetableCell',
    ebpTreeTableHeader: 'columnheader'
};

export const treeTableSettings = {
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