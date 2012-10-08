
var ajgroups = require('../'),
    assert = require('assert');

// Simple permutation

var perm1 = ajgroups.permutation([1, 0]);
assert.ok(perm1);

// Multiply to get identity

var perm2 = perm1.multiply(perm1);
assert.ok(perm2);
assert.equal(perm2.isIdentity(), true);

