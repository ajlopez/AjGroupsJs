
var ajgroups = require('../'),
    assert = require('assert');

// Create group using identity array

var group1 = ajgroups.createGroup([0]);
assert.ok(group1);
assert.equal(group1.order(), 1);

// Create group using identity array length 2

var group1b = ajgroups.createGroup([0, 1]);
assert.ok(group1b);
assert.equal(group1b.order(), 1);
assert.equal(group1.equals(group1b), true);
assert.equal(group1b.equals(group1), true);


