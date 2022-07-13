// 테스트 케이스
const assert = require('assert');
const { describe } = require('mocha');
const { hello } = require('../ex01');

describe('Hello World', function(){
    it('hello() test', function(){
        assert.strictEqual(hello(), "Hello World");
    });
});