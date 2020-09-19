
const ajgroups = require('../');
    
exports['Identity and Symmetric groups are normals'] = function (test) {
    for (let k = 1; k <= 5; k++) {
        const id = ajgroups.createGroup(ajgroups.identity(k));
        const group = ajgroups.symmetric(k);
        
        test.equal(id.isNormalSubgroup(group), true);
        test.equal(group.isNormalSubgroup(group), true);
    }
}

