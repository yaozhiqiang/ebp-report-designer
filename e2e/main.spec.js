/**
 * Created by yaoshining on 16/3/4.
 */
'use strict';

describe('The main view', function () {
    var page;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./main.po');
    });

    it('should have a EBP UI title', function() {
        expect(browser.getTitle()).toEqual('EBP UI');
    });

    it('should have a demo button', function () {
        page.demoEl.getText().then(function(text) {
            console.log(text);
        });
        expect(page.demoEl.getText()).toEqual('例子');
    });

});