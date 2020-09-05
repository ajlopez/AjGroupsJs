
const ajgroups = require('../');
const assert = require('assert');

// Normal Subgroups contains identity and original group

{
    const symmetric3 = ajgroups.symmetric(3);
    const id = ajgroups.createGroup([0]);

    const subgroups = symmetric3.normalSubgroups();

    assert.equal(contains(subgroups, id), true);
    assert.equal(contains(subgroups, symmetric3), true);
}

// Cyclic group with prime order has 2 normal subgroups

{
    const cyclic = ajgroups.createGroup([1, 2, 0]);
    const subgroups = cyclic.normalSubgroups();

    assert.equal(subgroups.length, 2);
}

// Cyclic group order 6

{
    const cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
    const subgroups = cyclic.normalSubgroups();
    
    assert.equal(subgroups.length, 4);
}

// Symmetric 3

{
    const group = ajgroups.symmetric(3);
    const subgroups = group.normalSubgroups();

    assert.equal(subgroups.length, 3);
}

function contains(elements, element) {
    for (let n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
