/**
 * Created by yao on 16/1/15.
 */
import FocusMeDirectiveFactory from './directives/focusMe.directive';
import FileModelDirectiveFactory from './directives/fileModel.directive';

let utilsModel = angular.module('ebpUI.utils', []);
utilsModel.directive('focusMe', FocusMeDirectiveFactory)
          .directive('fileModel', FileModelDirectiveFactory);
export default utilsModel;