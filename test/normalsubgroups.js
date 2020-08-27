
const ajgroups = require('../'),
    assert = require('assert');

// Normal Subgroups contains identity and original group

const symmetric3 = ajgroups.symmetric(3);
const id = ajgroups.createGroup([0]);

const subgroups = symmetric3.normalSubgroups();

assert.equal(contains(subgroups, id), true);
assert.equal(contains(subgroups, symmetric3), true);

// Cyclic group with prime order has 2 normal subgroups

const cyclic = ajgroups.createGroup([1, 2, 0]);
const subgroups2 = cyclic.normalSubgroups();
assert.equal(subgroups2.length, 2);

// Cyclic group order 6

const cyclic2 = ajgroups.createGroup(ajgroups.cyclic(6));
const subgroups3 = cyclic2.normalSubgroups();
assert.equal(subgroups3.length, 4);

// Symmetric 3

const group = ajgroups.symmetric(3);
const subgroups4 = group.normalSubgroups();
assert.equal(subgroups4.length, 3);

function contains(elements, element) {
    for (let n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
