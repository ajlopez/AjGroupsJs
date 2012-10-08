
var ajgroups = require('../'),
    assert = require('assert');

// Simple permutation

var perm1 = ajgroups.permutation([1, 0]);
assert.ok(perm1);

// Multiply to get identity

var perm2 = perm1.multiply(perm1);
assert.ok(perm2);
assert.equal(perm2.isIdentity(), true);

// Equals to itselft

assert.equal(perm1.equals(perm1), true);

// Equal to other permutation with same values

var perm3 = ajgroups.permutation([1, 0]);
assert.equal(perm1.equals(perm3), true);
assert.equal(perm3.equals(perm1), true);

// Equal to other permutation with different length

var perm4 = ajgroups.permutation([1, 0, 2, 3]);
assert.equal(perm1.equals(perm4), true);
assert.equal(perm4.equals(perm1), true);

// Not equal to identity

var identity = ajgroups.permutation([0, 1]);
assert.equal(perm1.equals(identity), false);
assert.equal(identity.equals(perm1), false);

// get identity

var id4 = ajgroups.identity(4);
assert.ok(id4);
assert.equal(id4.isIdentity(), true);



