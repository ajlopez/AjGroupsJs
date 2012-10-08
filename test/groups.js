
var ajgroups = require('../'),
    assert = require('assert');

// Symmetric 3

var symmetric3 = ajgroups.symmetric(3);
assert.ok(symmetric3);
assert.equal(symmetric3.order(), 3*2*1);

// Symmetric 4

var symmetric4 = ajgroups.symmetric(4);
assert.ok(symmetric4);
assert.equal(symmetric4.order(), 4*3*2*1);

// Get identity

var elements = symmetric3.elements(function(el) { return el.order() == 1 });
assert.ok(elements);
assert.equal(elements.length, 1);
assert.equal(elements[0].isIdentity(), true);

var elements = symmetric4.elements(function(el) { return el.order() == 1 });
assert.ok(elements);
assert.equal(elements.length, 1);
assert.equal(elements[0].isIdentity(), true);

// Get order 2

var elements = symmetric3.elements(function(el) { return el.order() == 2 });
assert.ok(elements);
assert.equal(elements.length, 3);

var elements = symmetric4.elements(function(el) { return el.order() == 2 });
assert.ok(elements);
assert.equal(elements.length, 9);

// Get order 3

var elements = symmetric3.elements(function(el) { return el.order() == 3 });
assert.ok(elements);
assert.equal(elements.length, 2);
