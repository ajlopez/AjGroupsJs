
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

// Symmetric 4

var group = ajgroups.symmetric(4);
var subgroups = group.subgroups();
assert.equal(subgroups.length, 30);

// Cyclic 4

var group = ajgroups.createGroup(ajgroups.cyclic(4));
var subgroups = group.subgroups();
assert.equal(subgroups.length, 3);

// Cyclic 5

var group = ajgroups.createGroup(ajgroups.cyclic(5));
var subgroups = group.subgroups();
assert.equal(subgroups.length, 2);

// Cyclic 7

var group = ajgroups.createGroup(ajgroups.cyclic(7));
var subgroups = group.subgroups();
assert.equal(subgroups.length, 2);

function contains(elements, element) {
    for (var n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
