
const ajgroups = require('../');
const assert = require('assert');
    
// Identity and Symmetric groups are normals

{
    for (let k = 1; k <= 5; k++) {
        const id = ajgroups.createGroup(ajgroups.identity(k));
        const group = ajgroups.symmetric(k);
        
        assert.equal(id.isNormalSubgroup(group), true);
        assert.equal(group.isNormalSubgroup(group), true);
    }
}

