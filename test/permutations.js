
const ajgroups = require('../');
const assert = require('assert');

// Simple permutation

{
    const perm1 = ajgroups.permutation([1, 0]);

    assert.ok(perm1);
}

// Multiply to get identity

{
    const perm1 = ajgroups.permutation([1, 0]);
    const perm2 = perm1.multiply(perm1);

    assert.ok(perm2);
    assert.equal(perm2.isIdentity(), true);
}

// Equals to itselft

{
    const perm1 = ajgroups.permutation([1, 0]);

    assert.equal(perm1.equals(perm1), true);
}

// Equal to other permutation with same values
{
    const perm1 = ajgroups.permutation([1, 0]);
    const perm3 = ajgroups.permutation([1, 0]);
    
    assert.equal(perm1.equals(perm3), true);
    assert.equal(perm3.equals(perm1), true);
}

// Equal to other permutation with different length
{
    const perm1 = ajgroups.permutation([1, 0]);
    const perm4 = ajgroups.permutation([1, 0, 2, 3]);

    assert.equal(perm1.equals(perm4), true);
    assert.equal(perm4.equals(perm1), true);
}

// Not equal to identity
{
    const perm1 = ajgroups.permutation([1, 0]);
    const identity = ajgroups.permutation([0, 1]);
    
    assert.equal(perm1.equals(identity), false);
    assert.equal(identity.equals(perm1), false);
}

// get identity

{
    const id4 = ajgroups.identity(4);
    
    assert.ok(id4);
    assert.equal(id4.isIdentity(), true);
}

// get cycle 2

{
    const perm1 = ajgroups.permutation([1, 0]);
    const cyc2 = ajgroups.cyclic(2);
    
    assert.ok(cyc2);
    assert.equal(cyc2.equals(perm1), true);
}

// get switch 2

{
    const cyc2 = ajgroups.cyclic(2);
    const exchange2 = ajgroups.exchange(2);
    
    assert.ok(exchange2);
    assert.equal(exchange2.equals(cyc2), true);
}

// generate using cycle 2

{
    const cyc2 = ajgroups.cyclic(2);
    const twoelements = ajgroups.generate(cyc2);

    assert.ok(twoelements);
    assert.equal(twoelements.length, 2);
    assert.equal(twoelements[0].equals(cyc2), true);
    assert.equal(twoelements[1].isIdentity(), true);
}

// generate symmetric 3 using two generators

{
    const symmetric3 = ajgroups.generate(ajgroups.exchange(3), ajgroups.cyclic(3));
    
    assert.ok(symmetric3);
    assert.equal(symmetric3.length, 3*2*1);
}

// generate symmetric 4 using two generators

{
    const symmetric4 = ajgroups.generate(ajgroups.exchange(4), ajgroups.cyclic(4));

    assert.ok(symmetric4);
    assert.equal(symmetric4.length, 4*3*2*1);
}

// generate symmetric 5 using two generators

{
    const symmetric5 = ajgroups.generate(ajgroups.exchange(5), ajgroups.cyclic(5));

    assert.ok(symmetric5);
    assert.equal(symmetric5.length, 5*4*3*2*1);
}

// order

{
    const identity = ajgroups.permutation([0, 1]);
    const exchange2 = ajgroups.exchange(2);

    assert.equal(identity.order(), 1);
    assert.equal(exchange2.order(), 2);
    assert.equal(ajgroups.cyclic(5).order(), 5);
}

