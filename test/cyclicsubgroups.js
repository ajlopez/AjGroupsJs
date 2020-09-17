
const ajgroups = require('../');

exports['Get cyclic subgroups of S1'] = function (test) {
    const s1 = ajgroups.symmetric(1);
    const cyclicSubgroups = s1.cyclicSubgroups();
    
    test.ok(cyclicSubgroups);
    test.equal(cyclicSubgroups.length, 1);
}

exports['Get cyclic subgroups of S2'] = function (test) {
    const s1 = ajgroups.symmetric(2);
    const cyclicSubgroups = s1.cyclicSubgroups();
    
    test.ok(cyclicSubgroups);
    test.equal(cyclicSubgroups.length, 2);
}

exports['Get cyclic subgroups of S3'] = function (test) {
    const s1 = ajgroups.symmetric(3);
    const cyclicSubgroups = s1.cyclicSubgroups();
    
    test.ok(cyclicSubgroups);
    test.equal(cyclicSubgroups.length, 5);
}

