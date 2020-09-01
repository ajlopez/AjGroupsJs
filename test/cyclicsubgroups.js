
const ajgroups = require('../');
const assert = require('assert');

// Get cyclic subgroups of S1

{
    const s1 = ajgroups.symmetric(1);
    const cyclicSubgroups = s1.cyclicSubgroups();
    assert.ok(cyclicSubgroups);
    assert.equal(cyclicSubgroups.length, 1);
}

// Get cyclic subgroups of S2

{
    const s1 = ajgroups.symmetric(2);
    const cyclicSubgroups = s1.cyclicSubgroups();
    assert.ok(cyclicSubgroups);
    assert.equal(cyclicSubgroups.length, 2);
}

// Get cyclic subgroups of S3

{
    const s1 = ajgroups.symmetric(3);
    const cyclicSubgroups = s1.cyclicSubgroups();
    assert.ok(cyclicSubgroups);
    assert.equal(cyclicSubgroups.length, 5);
}

