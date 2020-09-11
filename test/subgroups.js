
const ajgroups = require('../');
const assert = require('assert');

// Subgroups contains identity and original group

{
    const symmetric3 = ajgroups.symmetric(3);
    const id = ajgroups.createGroup([0]);

    const subgroups = symmetric3.subgroups();

    assert.equal(contains(subgroups, id), true);
    assert.equal(contains(subgroups, symmetric3), true);
}

// Cyclic group with prime order has 2 subgroups

{
    const cyclic = ajgroups.createGroup([1, 2, 0]);
    const subgroups = cyclic.subgroups();
    
    assert.equal(subgroups.length, 2);
}

// Cyclic group order 6

{
    const cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
    const subgroups = cyclic.subgroups();
    
    assert.equal(subgroups.length, 4);
}

// Symmetric 3

{
    const group = ajgroups.symmetric(3);
    const subgroups = group.subgroups();
    
    assert.equal(subgroups.length, 6);
}

// Symmetric 4

{
    const group = ajgroups.symmetric(4);
    const subgroups = group.subgroups();

    assert.equal(subgroups.length, 30);
}

// Cyclic 4

{
    const group = ajgroups.createGroup(ajgroups.cyclic(4));
    const subgroups = group.subgroups();
    
    assert.equal(subgroups.length, 3);
}

// Cyclic 5

{
    const group = ajgroups.createGroup(ajgroups.cyclic(5));
    const subgroups = group.subgroups();
    
    assert.equal(subgroups.length, 2);
}

// Cyclic 7

{
    const group = ajgroups.createGroup(ajgroups.cyclic(7));
    const subgroups = group.subgroups();
    
    assert.equal(subgroups.length, 2);
}

function contains(elements, element) {
    for (const n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}

