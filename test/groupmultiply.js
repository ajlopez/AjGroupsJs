
const ajgroups = require('../');

exports['Group multiply should be idempotent'] = function (test) {
    const group = ajgroups.symmetric(3);
    const result = group.multiply(group);
    
    test.ok(result);
    result.equals(group);
    group.equals(result);
}

exports['Generate symmetric group'] = function (test) {
    const group1 = ajgroups.createGroup([1, 2, 3, 0]);
    const group2 = ajgroups.createGroup([1, 0, 2, 3]);

    const result = group1.multiply(group2);

    test.equal(result.order(), 4*3*2*1);
    test.equal(result.equals(ajgroups.symmetric(4)), true);
}

