
var ajgroups = require('../'),
    assert = require('assert');

// Subgroups contains identity and original group

var symmetric3 = ajgroups.symmetric(3);
var id = ajgroups.createGroup([0]);

var subgroups = symmetric3.subgroups();

assert.equal(contains(subgroups, id), true);
assert.equal(contains(subgroups, symmetric3), true);

// Cyclic group with prime order has 2 subgroups

var cyclic = ajgroups.createGroup([1, 2, 0]);
var subgroups = cyclic.subgroups();
assert.equal(subgroups.length, 2);

// Cyclic group order 6

var cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
var subgroups = cyclic.subgroups();
assert.equal(subgroups.length, 4);

// Symmetric 3

var group = ajgroups.symmetric(3);
var subgroups = group.subgroups();
assert.equal(subgroups.length, 6);

function contains(elements, element) {
    for (var n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
