
var ajgroups = require('../'),
    assert = require('assert');

// Get cyclic subgroups of S1

var s1 = ajgroups.symmetric(1);
var cyclicSubgroups = s1.cyclicSubgroups();
assert.ok(cyclicSubgroups);
assert.ok(cyclicSubgroups.length, 1);

// Get cyclic subgroups of S2

var s1 = ajgroups.symmetric(2);
var cyclicSubgroups = s1.cyclicSubgroups();
assert.ok(cyclicSubgroups);
assert.ok(cyclicSubgroups.length, 2);

// Get cyclic subgroups of S3

var s1 = ajgroups.symmetric(3);
var cyclicSubgroups = s1.cyclicSubgroups();
assert.ok(cyclicSubgroups);
assert.ok(cyclicSubgroups.length, 3);
