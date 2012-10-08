
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

// get cycle 2

var cyc2 = ajgroups.cyclic(2);
assert.ok(cyc2);
assert.equal(cyc2.equals(perm1), true);

// get switch 2

var exchange2 = ajgroups.exchange(2);
assert.ok(exchange2);
assert.equal(exchange2.equals(cyc2), true);

// generate using cycle 2

var twoelements = ajgroups.generate(cyc2);
assert.ok(twoelements);
assert.equal(twoelements.length, 2);
assert.equal(twoelements[0].equals(cyc2), true);
assert.equal(twoelements[1].isIdentity(), true);

// generate symmetric 3 using two generators

var symmetric3 = ajgroups.generate(ajgroups.exchange(3), ajgroups.cyclic(3));
assert.ok(symmetric3);
assert.equal(symmetric3.length, 3*2*1);

// generate symmetric 4 using two generators

var symmetric4 = ajgroups.generate(ajgroups.exchange(4), ajgroups.cyclic(4));
assert.ok(symmetric4);
assert.equal(symmetric4.length, 4*3*2*1);

// generate symmetric 5 using two generators

var symmetric5 = ajgroups.generate(ajgroups.exchange(5), ajgroups.cyclic(5));
assert.ok(symmetric5);
assert.equal(symmetric5.length, 5*4*3*2*1);
