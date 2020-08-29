
const ajgroups = require('../');
const assert = require('assert');

// Subgroups contains identity and original group

const symmetric3 = ajgroups.symmetric(3);
const id = ajgroups.createGroup([0]);

const subgroups = symmetric3.subgroups();

assert.equal(contains(subgroups, id), true);
assert.equal(contains(subgroups, symmetric3), true);

// Cyclic group with prime order has 2 subgroups

const cyclic = ajgroups.createGroup([1, 2, 0]);
const subgroups2 = cyclic.subgroups();
assert.equal(subgroups2.length, 2);

// Cyclic group order 6

{
    const cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
    const subgroups = cyclic.subgroups();
    
    assert.equal(subgroups.length, 4);
}

// Symmetric 3

const group = ajgroups.symmetric(3);
const subgroups4 = group.subgroups();
assert.equal(subgroups4.length, 6);

// Symmetric 4

const group2 = ajgroups.symmetric(4);
const subgroups5 = group2.subgroups();
assert.equal(subgroups5.length, 30);

// Cyclic 4

const group3 = ajgroups.createGroup(ajgroups.cyclic(4));
const subgroups6 = group3.subgroups();
assert.equal(subgroups6.length, 3);

// Cyclic 5

const group4 = ajgroups.createGroup(ajgroups.cyclic(5));
const subgroups7 = group4.subgroups();
assert.equal(subgroups7.length, 2);

// Cyclic 7

const group5 = ajgroups.createGroup(ajgroups.cyclic(7));
const subgroups8 = group5.subgroups();
assert.equal(subgroups8.length, 2);

function contains(elements, element) {
    for (const n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
