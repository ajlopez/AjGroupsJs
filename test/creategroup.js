
const ajgroups = require('../');
const assert = require('assert');

exports['Create group using identity array'] = function (test) {
    const group = ajgroups.createGroup([0]);
    
    test.ok(group);
    test.equal(group.order(), 1);
}

exports['Create group using identity array length 2'] = function (test) {
    const group = ajgroups.createGroup([0, 1]);
    const groupb = ajgroups.createGroup([0]);
    
    test.ok(group);
    test.equal(group.order(), 1);
    test.equal(groupb.equals(group), true);
    test.equal(group.equals(groupb), true);
}

exports['Create group using an exchange permutation'] = function (test) {
    const group = ajgroups.createGroup([1, 0]);
    
    test.ok(group);
    test.equal(group.order(), 2);
}

exports['Create group using exchange and cyclic permutation'] = function (test) {
    const group = ajgroups.createGroup([1, 0, 2], [1, 2, 0]);
    
    test.ok(group);
    test.equal(group.order(), 6);
    test.ok(group.equals(ajgroups.symmetric(3)));
}

exports['Groups created from prime order cyclic permutation are equals'] = function (test) {
    const cyclic = ajgroups.cyclic(5);
    const cyclic2 = cyclic.multiply(cyclic);
    const groupa = ajgroups.createGroup(cyclic);
    const groupb = ajgroups.createGroup(cyclic2);
    
    test.equal(groupa.equals(groupb), true);
    test.equal(groupb.equals(groupa), true);
}

