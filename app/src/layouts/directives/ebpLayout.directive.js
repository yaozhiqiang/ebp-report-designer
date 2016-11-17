/**
 * Created by yao on 15/12/9.
 */
import {directiveNames} from '../config';

function EbpLayoutDirectiveFactory(EbpLayoutType) {
    'ngInject';
    function linkFun(scope, elem, attrs, layout) {
        elem.addClass('ebp-layout');
        attrs.$observe(directiveNames.ebpLayout, (type) => {
            let layoutType = type || EbpLayoutType.row;
            layout.layoutType = layoutType;
            layout.render();
        });
    }
    let directive = {
        restrict: 'A',
        scope: true,
        link: linkFun,
        controller: EbpLayoutController,
        controllerAs: '$ebpLayout'
    };

    return directive;
}

class EbpLayoutController {
    constructor(EbpLayoutType) {
        'ngInject';
        this.layoutItems = [];
        this.EbpLayoutType = EbpLayoutType;
    }

    render() {
        this.calcSize();
        if(this.layoutType === this.EbpLayoutType.row) {
            angular.forEach(this.layoutItems, (item) => {
                item.render(this.layoutType);
            });
        }
        if(this.layoutType === this.EbpLayoutType.column) {
            angular.forEach(this.layoutItems, (item) => {
                item.render(this.layoutType);
            });
        }
    }

    calcSize() {
        let size = 0,
            assignedItems = [],
            autoItems = [],
            allPercent = true;
        angular.forEach(this.layoutItems, (item) => {
            if(!item.size){
                autoItems.push(item);
            } else {
                allPercent = allPercent && angular.isNumber(item.size);
                assignedItems.push(item);
            }
        });
        if(assignedItems.length < 1) {
            size = 100 / this.layoutItems.length;
        } else {
            if(allPercent) {
                let totalAssignedPercent = 0;
                angular.forEach(assignedItems, (item) => {
                    totalAssignedPercent += item.size;
                });
                size = (100 - totalAssignedPercent) / autoItems.length;
            } else {
                size = '';
                let totalAssignedPercent = 0;
                let offsets = [];
                angular.forEach(assignedItems, (item) => {
                    if(angular.isNumber(item.size)) {
                        totalAssignedPercent += item.size;
                    }
                    if(angular.isString(item.size)) {
                        offsets.push(item);
                    }
                });
                if(offsets.length > 0) {
                    size = '(100%';
                    angular.forEach(offsets, (item) => {
                        size += ` - ${item.size}`;
                    });
                    if(totalAssignedPercent > 0) {
                        size += ` - ${totalAssignedPercent}%`;
                    }
                    size += ')';
                    if(autoItems.length > 0) {
                        size += ` / ${autoItems.length}`;
                    }
                }
            }
        }
        angular.forEach(autoItems, (item) => {
            item.size = size;
        });
    }
}

export default EbpLayoutDirectiveFactory;