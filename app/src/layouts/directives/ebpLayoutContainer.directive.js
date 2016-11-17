/**
 * Created by yao on 15/12/9.
 */
import {directiveNames} from '../config';

function EbpLayoutContainerDirectiveFactory() {
    function linkFunc(scope, elem, attrs, layout) {
        elem.addClass('ng-hide').addClass('ebp-layout-container');
        let size = attrs[directiveNames.ebpLayoutContainer];
        if(size) {
            let regx = /^[0-9]+.?[0-9]*$/;
            if(regx.test(size)) {
                scope.$ebpLayoutContainer.size = Number(size);
            } else {
                scope.$ebpLayoutContainer.size = size;
            }
        }
        layout.layoutItems.push(scope.$ebpLayoutContainer);
    }
    let directive = {
        restrict: 'A',
        require: `^${directiveNames.ebpLayout}`,
        scope: true,
        link: linkFunc,
        controller: EbpLayoutContainerController,
        controllerAs: '$ebpLayoutContainer'
    };

    return directive;
}

class EbpLayoutContainerController {
    constructor($scope, EbpLayoutType, $element) {
        'ngInject';
        this.EbpLayoutType = EbpLayoutType;
        this.$ebpLayout = $scope.$ebpLayout;
        this.$el = $element;
    }

    render(type) {
        if(type === this.EbpLayoutType.row) {
            if(angular.isNumber(this.size)) {
                this.$el.height(this.size + '%');
            } else {
                this.$el.height(`calc(${this.size})`);
            }
        }
        if(type === this.EbpLayoutType.column) {
            if(angular.isNumber(this.size)) {
                this.$el.width(this.size + '%');
            } else {
                this.$el.width(`calc(${this.size})`);
            }
        }
        this.$el.removeClass('ng-hide');
    }
}

export default EbpLayoutContainerDirectiveFactory;
