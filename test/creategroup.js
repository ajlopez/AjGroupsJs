
const ajgroups = require('../');
const assert = require('assert');

// Create group using identity array

{
    const group = ajgroups.createGroup([0]);
    
    assert.ok(group);
    assert.equal(group.order(), 1);
}

// Create group using identity array length 2

{
    const group = ajgroups.createGroup([0, 1]);
    const groupb = ajgroups.createGroup([0]);
    
    assert.ok(group);
    assert.equal(group.order(), 1);
    assert.equal(groupb.equals(group), true);
    assert.equal(group.equals(groupb), true);
}

// Create group using an exchange permutation

{
    const group = ajgroups.createGroup([1, 0]);
    
    assert.ok(group);
    assert.equal(group.order(), 2);
}

// Create group using exchange and cyclic permutation

{
    const group = ajgroups.createGroup([1, 0, 2], [1, 2, 0]);
    
    assert.ok(group);
    assert.equal(group.order(), 6);
    assert.ok(group.equals(ajgroups.symmetric(3)));
}

// Groups created from prime order cyclic permutation are equals

{
    const cyclic = ajgroups.cyclic(5);
    const cyclic2 = cyclic.multiply(cyclic);
    const groupa = ajgroups.createGroup(cyclic);
    const groupb = ajgroups.createGroup(cyclic2);
    
    assert.equal(groupa.equals(groupb), true);
    assert.equal(groupb.equals(groupa), true);
}

