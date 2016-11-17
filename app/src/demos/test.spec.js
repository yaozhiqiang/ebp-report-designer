/**
 * Created by yaoshining on 16/3/4.
 */
'use strict';
describe('Testing Modules', function() {
    describe('App Module:', function() {
        var designerModule;
        beforeEach(function(){
            designerModule = module('ebp.report.designer');
        });

        it('should be registered', function() {
            expect(designerModule).not.toBeNull();
        });

        it('should be injectable', inject(function($controller) {
            expect($controller).not.toBeNull();
        }));
    });
});