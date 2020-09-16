
const ajgroups = require('../');
    
exports['Symmetric 2 is cyclic'] = function (test) {
    const symmetric2 = ajgroups.symmetric(2);

    test.equal(symmetric2.isCyclic(), true);
}

exports['Symmetric 3 is not cyclic'] = function (test) {
    const symmetric3 = ajgroups.symmetric(3);

    test.equal(symmetric3.isCyclic(), false);
}

exports['Symmetric 4 is not cyclic'] = function (test) {
    const symmetric4 = ajgroups.symmetric(4);

    test.equal(symmetric4.isCyclic(), false);
}

exports['Group generated by cyclic element'] = function (test) {
    const cyclic3 = ajgroups.cyclic(3);
    const group = ajgroups.createGroup(cyclic3);

    test.equal(group.isCyclic(), true);
}

exports['Exchanges are cyclic'] = function (test) {
    for (let k = 2; k <= 6; k++)
        test.equal(ajgroups.createGroup(ajgroups.cyclic(k)).isCyclic(), true);
}
    
exports['Groups generated by cyclic permutation are cyclic'] = function (test) {
    for (let k = 2; k <= 6; k++)
        test.equal(ajgroups.createGroup(ajgroups.exchange(k)).isCyclic(), true);
}
    

