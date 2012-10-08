
var ajgroups = require('../'),
    assert = require('assert');

// Symmetric 3

var symmetric3 = ajgroups.symmetric(3);
assert.ok(symmetric3);
assert.equal(symmetric3.order(), 3*2*1);

