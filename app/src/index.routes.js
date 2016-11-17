/**
 * Created by yao on 15/12/11.
 */

function routesConfig($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'src/main/main.html'
    }).state('layout', {
        url: '/layout'
    }).state('layout.intro', {
        url: '/intro',
        views: {
            '@': {
                templateUrl: 'src/layouts/demo/intro.html'
            }
        }
    }).state('layout.container', {
        url: '/container',
        views: {
            '@': {
                templateUrl: 'src/layouts/demo/container.html'
            }
        }
    }).state('treeTable', {
        url: '/treetable',
        views: {
            '': {
                template: 'asdasd'
            }
        }
    }).state('treeTable.intro', {
        url: '/intro',
        views: {
            '@': {
                template: '对TreeTable得简要说明.'
            }
        }
    }).state('treeTable.demo', {
        url: '/demo',
        views: {
            '@': {
                templateUrl: 'src/demos/treeTable.html'
            }
        }
    }).state('designer', {
        url: '/designer',
        views: {
            '': {
                template: 'asdasd'
            }
        }
    }).state('designer.intro', {
        url: '/intro',
        views: {
            '@': {
                template: '对TreeTable得简要说明.'
            }
        }
    }).state('designer.demo', {
        url: '/demo',
        views: {
            '@': {
                templateUrl: 'src/demos/designer.html'
            }
        }
    }).state('designer.demo.add', {
        url: '/add',
        views: {
            '@': {
                templateUrl: 'src/demos/add.html'
            }
        }
    }).state('designer.demo.edit', {
        url: '/add',
        views: {
            '@': {
                templateUrl: 'designer-edit.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
}

export default routesConfig;
