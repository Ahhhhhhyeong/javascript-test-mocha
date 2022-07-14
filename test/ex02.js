const assert = require('assert').strict;
const { add, na, X } = require('../ex02.js');

describe('Module ex02 Test', function(){
    it('add() test01', function(){
        assert.equal(add(10, 20), 30, 'equal: fail');
    });
    
    it('add() test02', function() {
		assert.notEqual(add(10, 20), '30', 'notEqual: fail');
	});
});