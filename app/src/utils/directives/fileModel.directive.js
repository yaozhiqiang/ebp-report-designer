/**
 * Created by yao on 16/1/21.
 */
function FileModelDirectiveFactory($parse) {
    'ngInject';
    function linkFunc(scope, elem, attrs) {
        let model = $parse(attrs.fileModel);
        elem.on('change', function() {
            let file = this.files[0];
            let fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onload = function() {
                let result = {};
                Object.defineProperties(result, {
                    file: {
                        get: () => {
                            return file;
                        }
                    },
                    url: {
                        get: () => {
                            return fr.result;
                        }
                    }
                });
                scope.$apply(() => {
                    model.assign(scope, result);
                });
            };
        });
    }

    let directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;
}

export default FileModelDirectiveFactory;