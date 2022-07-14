const assert = require('assert').strict;
const { na, X } = require('../ex02');

try {
    const a = new X();
    const c = a;
    const b = new X();

    assert.equal(a, c, 'a === c : fail');
    assert.deepEqual(a, c, 'deepEqual1 : fail');
    assert.deepEqual(a, b, 'deepEqual2 : fail');

    b.bar = 'foo';
    assert.deepEqual(a, b, 'deepEqula3: fail');
} catch (error) {
    console.log(error.message);
}