
const ajgroups = require('../');
const assert = require('assert');

// Group multiply should be idempotent

{
    const group = ajgroups.symmetric(3);
    const result = group.multiply(group);
    assert.ok(result);
    result.equals(group);
    group.equals(result);
}

// Generate symmetric group

{
    const group1 = ajgroups.createGroup([1, 2, 3, 0]);
    const group2 = ajgroups.createGroup([1, 0, 2, 3]);

    const result = group1.multiply(group2);

    assert.equal(result.order(), 4*3*2*1);
    assert.equal(result.equals(ajgroups.symmetric(4)), true);
}

