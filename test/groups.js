
const ajgroups = require('../');
    
exports['Symmetric 1'] = function (test) {
    const symmetric = ajgroups.symmetric(1);
    
    test.ok(symmetric);
    test.equal(symmetric.order(), 1);
}
    
exports['Symmetric 2'] = function (test) {
    const symmetric = ajgroups.symmetric(2);
    
    test.ok(symmetric);
    test.equal(symmetric.order(), 2*1);
}

exports['Symmetric 3'] = function (test) {
    const symmetric = ajgroups.symmetric(3);
    
    test.ok(symmetric);
    test.equal(symmetric.order(), 3*2*1);
}

exports['Symmetric 4'] = function (test) {
    const symmetric = ajgroups.symmetric(4);
    
    test.ok(symmetric);
    test.equal(symmetric.order(), 4*3*2*1);
}

exports['Get identity'] = function (test) {
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 1 });
    
    test.ok(elements);
    test.equal(elements.length, 1);
    test.equal(elements[0].isIdentity(), true);
}

exports['Get identity from Symmetric 4'] = function (test) {
    const symmetric = ajgroups.symmetric(4);
    const elements = symmetric.elements(function(el) { return el.order() == 1 });

    test.ok(elements);
    test.equal(elements.length, 1);
    test.equal(elements[0].isIdentity(), true);
}

exports['Get order 2'] = function (test) {
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 2 });
    
    test.ok(elements);
    test.equal(elements.length, 3);
}

exports['Get Order 2 from Symmetric 4'] = function (test) {
    const symmetric = ajgroups.symmetric(4);
    const elements = symmetric.elements(function(el) { return el.order() == 2 });
    
    test.ok(elements);
    test.equal(elements.length, 9);
}

exports['Get order 3'] = function (test) {
    const symmetric = ajgroups.symmetric(3);
    const elements = symmetric.elements(function(el) { return el.order() == 3 });
    
    test.ok(elements);
    test.equal(elements.length, 2);
}

exports['Is subgroup'] = function (test) {
    const symmetric2 = ajgroups.symmetric(2);
    const symmetric3 = ajgroups.symmetric(3);
    const symmetric4 = ajgroups.symmetric(4);
    
    test.equal(symmetric3.isSubgroup(symmetric4), true);
    test.equal(symmetric2.isSubgroup(symmetric4), true);
    test.equal(symmetric2.isSubgroup(symmetric3), true);
    test.equal(symmetric4.isSubgroup(symmetric3), false);
}

exports['equals'] = function (test) {
    const symmetric3 = ajgroups.symmetric(3);
    const symmetric4 = ajgroups.symmetric(4);
    
    test.equal(symmetric3.equals(symmetric3), true);
    test.equal(symmetric3.equals(symmetric4), false);
    test.equal(symmetric3.equals(ajgroups.symmetric(3)), true);
}

