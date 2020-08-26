
const ajgroups = require('../');
const assert = require('assert');

// Create group using identity array

const group1 = ajgroups.createGroup([0]);
assert.ok(group1);
assert.equal(group1.order(), 1);

// Create group using identity array length 2

const group1b = ajgroups.createGroup([0, 1]);
assert.ok(group1b);
assert.equal(group1b.order(), 1);
assert.equal(group1.equals(group1b), true);
assert.equal(group1b.equals(group1), true);

// Create group using an exchange permutation

const group2 = ajgroups.createGroup([1, 0]);
assert.ok(group2);
assert.equal(group2.order(), 2);

// Create group using exchange and cyclic permutation

const group3 = ajgroups.createGroup([1, 0, 2], [1, 2, 0]);
assert.ok(group3);
assert.equal(group3.order(), 6);
assert.ok(group3.equals(ajgroups.symmetric(3)));

// Groups created from prime order cyclic permutation are equals

const cyclic5 = ajgroups.cyclic(5);
const cyclic55 = cyclic5.multiply(cyclic5);
const groupa = ajgroups.createGroup(cyclic5);
const groupb = ajgroups.createGroup(cyclic55);
assert.equal(groupa.equals(groupb), true);
assert.equal(groupb.equals(groupa), true);

