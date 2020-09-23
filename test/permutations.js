
const ajgroups = require('../');

exports['Simple permutation'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);

    test.ok(perm1);
}

exports['Multiply to get identity'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);
    const perm2 = perm1.multiply(perm1);

    test.ok(perm2);
    test.equal(perm2.isIdentity(), true);
}

exports['Equals to itselft'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);

    test.equal(perm1.equals(perm1), true);
}

exports['Equal to other permutation with same values'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);
    const perm3 = ajgroups.permutation([1, 0]);
    
    test.equal(perm1.equals(perm3), true);
    test.equal(perm3.equals(perm1), true);
}

exports['Equal to other permutation with different length'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);
    const perm4 = ajgroups.permutation([1, 0, 2, 3]);

    test.equal(perm1.equals(perm4), true);
    test.equal(perm4.equals(perm1), true);
}

exports['Not equal to identity'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);
    const identity = ajgroups.permutation([0, 1]);
    
    test.equal(perm1.equals(identity), false);
    test.equal(identity.equals(perm1), false);
}

exports['get identity'] = function (test) {
    const id4 = ajgroups.identity(4);
    
    test.ok(id4);
    test.equal(id4.isIdentity(), true);
}

exports['get cycle 2'] = function (test) {
    const perm1 = ajgroups.permutation([1, 0]);
    const cyc2 = ajgroups.cyclic(2);
    
    test.ok(cyc2);
    test.equal(cyc2.equals(perm1), true);
}

exports['get switch 2'] = function (test) {
    const cyc2 = ajgroups.cyclic(2);
    const exchange2 = ajgroups.exchange(2);
    
    test.ok(exchange2);
    test.equal(exchange2.equals(cyc2), true);
}

exports['generate using cycle 2'] = function (test) {
    const cyc2 = ajgroups.cyclic(2);
    const twoelements = ajgroups.generate(cyc2);

    test.ok(twoelements);
    test.equal(twoelements.length, 2);
    test.equal(twoelements[0].equals(cyc2), true);
    test.equal(twoelements[1].isIdentity(), true);
}

exports['generate symmetric 3 using two generators'] = function (test) {
    const symmetric3 = ajgroups.generate(ajgroups.exchange(3), ajgroups.cyclic(3));
    
    test.ok(symmetric3);
    test.equal(symmetric3.length, 3*2*1);
}

exports['generate symmetric 4 using two generators'] = function (test) {
    const symmetric4 = ajgroups.generate(ajgroups.exchange(4), ajgroups.cyclic(4));

    test.ok(symmetric4);
    test.equal(symmetric4.length, 4*3*2*1);
}

exports['generate symmetric 5 using two generators'] = function (test) {
    const symmetric5 = ajgroups.generate(ajgroups.exchange(5), ajgroups.cyclic(5));

    test.ok(symmetric5);
    test.equal(symmetric5.length, 5*4*3*2*1);
}

exports['order'] = function (test) {
    const identity = ajgroups.permutation([0, 1]);
    const exchange2 = ajgroups.exchange(2);

    test.equal(identity.order(), 1);
    test.equal(exchange2.order(), 2);
    test.equal(ajgroups.cyclic(5).order(), 5);
}

