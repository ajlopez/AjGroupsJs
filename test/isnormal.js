
var ajgroups = require('../'),
    assert = require('assert');
    
// Identity and Symmetric groups are normals

for (var k = 1; k <= 5; k++) {
    var id = ajgroups.createGroup(ajgroups.identity(k));
    var group = ajgroups.symmetric(k);
    assert.equal(id.isNormalSubgroup(group), true);
    assert.equal(group.isNormalSubgroup(group), true);
}

