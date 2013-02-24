
var ajgroups = (function() {
    function Group(elements) {
        this.elements = function(filter) {
            if (!filter)
                return elements;
                
            var result = [];
            
            for (var n in elements)
                if (filter(elements[n]))
                    result.push(elements[n]);
            
            return result;
        }
        
        this.order = function() {
            return elements.length;
        }
    }
    
    Group.prototype.isSubgroup = function(group) {
        var elements = this.elements();
        var elements2 = group.elements();
        
        if (elements.length > elements2.length)
            return false;
            
        for (var n in elements)
            if (!contains(elements2, elements[n]))
                return false;
        
        return true;
    };
    
    Group.prototype.cyclicSubgroups = function () {
        var subgroups = [];
        var elements = this.elements();

        for (var n in elements) {
            var subgroup = createGroup(elements[n]);
            if (!contains(subgroups, subgroup))
                subgroups.push(subgroup);
        }

        return subgroups;
    };

    Group.prototype.subgroups = function () {
        var subgroups = this.cyclicSubgroups();

        return generate.apply(null, subgroups);
    };

    Group.prototype.multiply = function (group) {
        var result = this.elements().slice(0);
        var elements2 = group.elements();

        for (var n in elements2) {
            var element = elements2[n];
            if (!contains(result, element))
                result.push(element);
        }

        return new Group(generate.apply(null, result));
    };
    
    Group.prototype.equals = function(group) {
        var elements = this.elements();
        var elements2 = group.elements();
        
        if (elements.length != elements2.length)
            return false;

        return this.isSubgroup(group);
    };

    Group.prototype.isCyclic = function () {
        var order = this.order();
        var elements = this.elements();
        
        for (var n in elements)
            if (elements[n].order() === order)
                return true;

        return false;
    };
    
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
    
    Permutation.prototype.order = function() {
        if (this.calculatedOrder)
            return this.calculatedOrder;
        
        var result = 1;
        var element = this;
        
        while (true) {
            if (element.isIdentity()) {
                this.calculatedOrder = result;
                return result;
            }
            result++;
            element = element.multiply(this);
        }
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
    
    function identity(length) {
        var values = new Array(length);
        
        for (var k = 0; k < length; k++)
            values[k] = k;
            
        return new Permutation(values);
    }
    
    function exchange(length) {
        var values = new Array(length);
        
        for (var k = 2; k < length; k++)
            values[k] = k;
            
        values[0] = 1;
        values[1] = 0;
            
        return new Permutation(values);
    }
    
    function cyclic(length) {
        var values = new Array(length);
        
        for (var k = 0; k < length - 1; k++)
            values[k] = k + 1;
            
        values[length - 1] = 0;
            
        return new Permutation(values);
    }
    
    function symmetric(n) {
        var elements = generate(cyclic(n), exchange(n));
        return new Group(elements);
    }
    
    function generate() {
        var elements = [];
        
        for (var k = 0; k < arguments.length; k++) {
            var argument = arguments[k];
            if (!contains(elements, argument))
                elements.push(argument);
        }
        
        k = 0;
        
        while (k < elements.length) {
            var element = elements[k];
            
            var j = k;
            
            while (j < elements.length) {
                var element2 = elements[j];
                var result = element.multiply(element2);
                if (!contains(elements, result))
                    elements.push(result);
                if (j > k) {
                    result = element2.multiply(element);
                    if (!contains(elements, result))
                        elements.push(result);
                }
                j++;
            }
            
            k++;
        }
        
        return elements;
    }
    
    function contains(elements, element) {
        for (var n in elements) {
            if (elements[n].equals(element))
                return true;
        }
        
        return false;
    }
    
    function createGroup() {
        for (var n in arguments)
            if (Array.isArray(arguments[n]))
                arguments[n] = new Permutation(arguments[n]);

        return new Group(generate.apply(null, arguments));
    }

    var result = {
        permutation: permutation,
        identity: identity,
        cyclic: cyclic,
        exchange: exchange,
        generate: generate,
        symmetric: symmetric,
        createGroup: createGroup
    };
    
    if (typeof(global) !== 'undefined' && global.testing) {
    };
    
    return result;
}());

if (typeof(window) === 'undefined') {
	module.exports = ajgroups;
}

