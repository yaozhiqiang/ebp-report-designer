/**
 * Created by yaoshining on 16/3/8.
 */
'use strict';
Mock.mock('http://a.cn', {
    'list|1000-1500': [{
        'id|+1': 1,
        'name': '@ctitle',
        'details': '@csentence',
        'startTime': '@date',
        'endTime': '@date',
        'progress': '@natural(0, 100)'
    }]
});

$(function() {
    $.ajax({
        url: 'http://a.cn',
        success: function(data) {
            console.log(data);
        }
    });
});