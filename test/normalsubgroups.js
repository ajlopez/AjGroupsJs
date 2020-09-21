
const ajgroups = require('../');

exports['Normal Subgroups contains identity and original group'] = function (test) {
    const symmetric3 = ajgroups.symmetric(3);
    const id = ajgroups.createGroup([0]);

    const subgroups = symmetric3.normalSubgroups();

    test.equal(contains(subgroups, id), true);
    test.equal(contains(subgroups, symmetric3), true);
}

exports['Cyclic group with prime order has 2 normal subgroups'] = function (test) {
    const cyclic = ajgroups.createGroup([1, 2, 0]);
    const subgroups = cyclic.normalSubgroups();

    test.equal(subgroups.length, 2);
}

exports['Cyclic group order 6'] = function (test) {
    const cyclic = ajgroups.createGroup(ajgroups.cyclic(6));
    const subgroups = cyclic.normalSubgroups();
    
    test.equal(subgroups.length, 4);
}

exports['Symmetric 3'] = function (test) {
    const group = ajgroups.symmetric(3);
    const subgroups = group.normalSubgroups();

    test.equal(subgroups.length, 3);
}

function contains(elements, element) {
    for (let n in elements) {
        if (elements[n].equals(element))
            return true;
    }
    
    return false;
}
