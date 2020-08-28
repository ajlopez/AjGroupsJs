
const ajgroups = require('../');
const assert = require('assert');
    
// Symmetric 1

const symmetric1 = ajgroups.symmetric(1);
assert.ok(symmetric1);
assert.equal(symmetric1.order(), 1);
    
// Symmetric 2

const symmetric2 = ajgroups.symmetric(2);
assert.ok(symmetric2);
assert.equal(symmetric2.order(), 2*1);    

// Symmetric 3

const symmetric3 = ajgroups.symmetric(3);
assert.ok(symmetric3);
assert.equal(symmetric3.order(), 3*2*1);

// Symmetric 4

const symmetric4 = ajgroups.symmetric(4);
assert.ok(symmetric4);
assert.equal(symmetric4.order(), 4*3*2*1);

// Get identity

const elements = symmetric3.elements(function(el) { return el.order() == 1 });
assert.ok(elements);
assert.equal(elements.length, 1);
assert.equal(elements[0].isIdentity(), true);

const elements2 = symmetric4.elements(function(el) { return el.order() == 1 });
assert.ok(elements2);
assert.equal(elements2.length, 1);
assert.equal(elements2[0].isIdentity(), true);

// Get order 2

const elements3 = symmetric3.elements(function(el) { return el.order() == 2 });
assert.ok(elements3);
assert.equal(elements3.length, 3);

const elements4 = symmetric4.elements(function(el) { return el.order() == 2 });
assert.ok(elements4);
assert.equal(elements4.length, 9);

// Get order 3

const elements5 = symmetric3.elements(function(el) { return el.order() == 3 });
assert.ok(elements5);
assert.equal(elements5.length, 2);

// Is subgroup

assert.equal(symmetric3.isSubgroup(symmetric4), true);
assert.equal(symmetric2.isSubgroup(symmetric4), true);
assert.equal(symmetric2.isSubgroup(symmetric3), true);
assert.equal(symmetric4.isSubgroup(symmetric3), false);

// equals

assert.equal(symmetric3.equals(symmetric3), true);
assert.equal(symmetric3.equals(symmetric4), false);
assert.equal(symmetric3.equals(ajgroups.symmetric(3)), true);

