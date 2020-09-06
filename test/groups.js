
const ajgroups = require('../');
const assert = require('assert');
    
// Symmetric 1

{
    const symmetric = ajgroups.symmetric(1);
    
    assert.ok(symmetric);
    assert.equal(symmetric.order(), 1);
}
    
// Symmetric 2

{
    const symmetric = ajgroups.symmetric(2);
    
    assert.ok(symmetric);
    assert.equal(symmetric.order(), 2*1);
}

// Symmetric 3

{
    const symmetric = ajgroups.symmetric(3);
    
    assert.ok(symmetric);
    assert.equal(symmetric.order(), 3*2*1);
}

// Symmetric 4

{
    const symmetric = ajgroups.symmetric(4);
    
    assert.ok(symmetric);
    assert.equal(symmetric.order(), 4*3*2*1);
}

// Get identity

{
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 1 });
    
    assert.ok(elements);
    assert.equal(elements.length, 1);
    assert.equal(elements[0].isIdentity(), true);
}

{
    const symmetric = ajgroups.symmetric(4);
    const elements = symmetric.elements(function(el) { return el.order() == 1 });

    assert.ok(elements);
    assert.equal(elements.length, 1);
    assert.equal(elements[0].isIdentity(), true);
}

// Get order 2

{
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 2 });
    
    assert.ok(elements);
    assert.equal(elements.length, 3);
}

{
    const symmetric = ajgroups.symmetric(4);
    const elements = symmetric.elements(function(el) { return el.order() == 2 });
    
    assert.ok(elements);
    assert.equal(elements.length, 9);
}

// Get order 3

{
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 3 });
    
    assert.ok(elements);
    assert.equal(elements.length, 2);
}

// Is subgroup

{
    const symmetric2 = ajgroups.symmetric(2);
    const symmetric3 = ajgroups.symmetric(3);
    const symmetric4 = ajgroups.symmetric(4);
    
    assert.equal(symmetric3.isSubgroup(symmetric4), true);
    assert.equal(symmetric2.isSubgroup(symmetric4), true);
    assert.equal(symmetric2.isSubgroup(symmetric3), true);
    assert.equal(symmetric4.isSubgroup(symmetric3), false);
}

// equals

{
    const symmetric3 = ajgroups.symmetric(3);
    const symmetric4 = ajgroups.symmetric(4);
    
    assert.equal(symmetric3.equals(symmetric3), true);
    assert.equal(symmetric3.equals(symmetric4), false);
    assert.equal(symmetric3.equals(ajgroups.symmetric(3)), true);
}

