
const ajgroups = require('../');

exports['Subgroups contains identity and original group'] = function (test) {
    const symmetric3 = ajgroups.symmetric(3);
    const id = ajgroups.createGroup([0]);

    const subgroups = symmetric3.subgroups();

    test.equal(contains(subgroups, id), true);
    test.equal(contains(subgroups, symmetric3), true);
}

exports['Cyclic group with prime order has 2 subgroups'] = function (test) {
    const cyclic = ajgroups.createGroup([1, 2, 0]);
    const subgroups = cyclic.subgroups();
    
    test.equal(subgroups.length, 2);
}

exports['Cyclic group order 6'] = function (test) {
    const cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
    const subgroups = cyclic.subgroups();
    
    test.equal(subgroups.length, 4);
}

exports['Symmetric 3'] = function (test) {
    const group = ajgroups.symmetric(3);
    const subgroups = group.subgroups();
    
    test.equal(subgroups.length, 6);
}

exports['Symmetric 4'] = function (test) {
    const group = ajgroups.symmetric(4);
    const subgroups = group.subgroups();

    test.equal(subgroups.length, 30);
}

exports['Cyclic 4'] = function (test) {
    const group = ajgroups.createGroup(ajgroups.cyclic(4));
    const subgroups = group.subgroups();
    
    test.equal(subgroups.length, 3);
}

exports['Cyclic 5'] = function (test) {
    const group = ajgroups.createGroup(ajgroups.cyclic(5));
    const subgroups = group.subgroups();
    
    test.equal(subgroups.length, 2);
}

exports['Cyclic 7'] = function (test) {
    const group = ajgroups.createGroup(ajgroups.cyclic(7));
    const subgroups = group.subgroups();
    
    test.equal(subgroups.length, 2);
}

function contains(elements, element) {
    for (const n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}

