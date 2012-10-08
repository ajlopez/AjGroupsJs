
var ajgroups = (function() {
    function Permutation(values) {
    }

    function permutation(values) {
        return new Permutation(values);
    }

    var result = {
        permutation: permutation
    }
    
    if (typeof(global) !== 'undefined' && global.testing) {
    }
    
    return result;
}());

if (typeof(window) === 'undefined') {
	module.exports = ajgroups;
}

