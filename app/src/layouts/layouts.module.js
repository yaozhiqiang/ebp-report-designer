/**
 * Created by yao on 15/12/7.
 */
import * as config from './config';

import Constants from './layouts.const';

import EbpLayoutDirectiveFactory from './directives/ebpLayout.directive.js';
import EbpLayoutContainerDirectiveFactory from './directives/ebpLayoutContainer.directive';

var layoutsModule = angular.module('ebpUI.layouts', []);
layoutsModule.directive(config.directiveNames.ebpLayout, EbpLayoutDirectiveFactory)
             .directive(config.directiveNames.ebpLayoutContainer, EbpLayoutContainerDirectiveFactory);

for(let e in Constants) {
    layoutsModule.constant(e, Constants[e]);
}

export default layoutsModule;
