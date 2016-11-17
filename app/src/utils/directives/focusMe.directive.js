/**
 * Created by yao on 16/1/15.
 */
function FocusMeDirectiveFactory($parse, $timeout) {
	'ngInject';
	function linkFunc(scope, elem, attrs) {
		let model = $parse(attrs.focusMe);
		scope.$watch(model, (value) => {
			if(value === true) {
				$timeout(() => elem.focus());
			}
		});

		elem.on('blur', () => {
			scope.$apply(() => {
				model.assign(scope, false);
			});
		});
	}

    let directive = {
    	priority: 5,
        restrict: 'A',
        link: linkFunc
    };

    return directive;
}

export default FocusMeDirectiveFactory;