
var ajgroups = (function() {
    function Permutation(values) {
        this.values = values;
    }
    
    Permutation.prototype.multiply = function(permutation) {
        return multiplyValues(this.values, permutation.values);
    };
    
    Permutation.prototype.isIdentity = function() {
        var l = this.values.length;
        
        for (var k = 0; k < l; k++)
            if (this.values[k] != k)
                return false;
        
        return true;
    }
    
    Permutation.prototype.equals = function(permutation) {
        return equalValues(this.values, permutation.values);
    }
    
    function equalValues(values1, values2) {
        var l1 = values1.length;
        var l2 = values2.length;
        var l = Math.max(l1, l2);
        
        for (var k = 0; k < l; k++) {
            if (k >= l1 && k < l2 && values2[k] != k)
                return false;
            if (k >= l2 && k < l1 && values1[k] != k)
                return false;
            if (k < l1 && k < l2 && values1[k] != values2[k])
                return false;
        }
        
        return true;
    }
    
    function multiplyValues(values1, values2) {
        var l1 = values1.length;
        var l2 = values2.length;
        var l = Math.max(l1, l2);
        
        var values = new Array(l);
        
        for (var k = 0; k < l; k++) {
            var n = k;
            if (k < l1)
                n = values1[n];
            if (k < l2)
                n = values2[n];
            values[k] = n;
        }
        
        return new Permutation(values);
    }

    function permutation(values) {
        return new Permutation(values);
    }

    var result = {
        permutation: permutation
    };
    
    if (typeof(global) !== 'undefined' && global.testing) {
    };
    
    return result;
}());

if (typeof(window) === 'undefined') {
	module.exports = ajgroups;
}

