
const ajgroups = (function() {
    function Group(elements) {
        this.elements = function(filter) {
            if (!filter)
                return elements;
                
            const result = [];
            
            for (let n in elements)
                if (filter(elements[n]))
                    result.push(elements[n]);
            
            return result;
        }
        
        this.order = function() {
            return elements.length;
        }
    }
    
    Group.prototype.isSubgroup = function (group) {
        const elements = this.elements();
        const elements2 = group.elements();
        
        if (elements.length > elements2.length)
            return false;
            
        for (let n in elements)
            if (!contains(elements2, elements[n]))
                return false;
        
        return true;
    };
    
    Group.prototype.isNormalSubgroup = function (group) {
        if (!this.isSubgroup(group))
            return false;

        const elements = group.elements();
        const elements2 = this.elements();

        for (let n in elements) {
            const left = [];
            const right = [];
            const element = elements[n];

            for (let m in elements2) {
                const element2 = elements2[m];
                left.push(element.multiply(element2));
                right.push(element2.multiply(element));
            }

            for (let l in left)
                if (!contains(right, left[l]))
                    return false;

            for (let r in right)
                if (!contains(left, right[r]))
                    return false;
        }

        return true;
    };
    
    Group.prototype.cyclicSubgroups = function () {
        const subgroups = [];
        const elements = this.elements();

        for (let n in elements) {
            const subgroup = createGroup(elements[n]);
            
            if (!contains(subgroups, subgroup))
                subgroups.push(subgroup);
        }

        return subgroups;
    };

    Group.prototype.subgroups = function () {
        const subgroups = this.cyclicSubgroups();

        return generate.apply(null, subgroups);
    };
    
    Group.prototype.normalSubgroups = function () {
        const subgroups = this.subgroups();
        const normals = [];

        for (let n in subgroups)
            if (subgroups[n].isNormalSubgroup(this))
                normals.push(subgroups[n]);

        return normals;
    }

    Group.prototype.multiply = function (group) {
        const result = this.elements().slice(0);
        const elements2 = group.elements();

        for (let n in elements2) {
            const element = elements2[n];
            
            if (!contains(result, element))
                result.push(element);
        }

        return new Group(generate.apply(null, result));
    };
    
    Group.prototype.equals = function(group) {
        const elements = this.elements();
        const elements2 = group.elements();
        
        if (elements.length != elements2.length)
            return false;

        return this.isSubgroup(group);
    };

    Group.prototype.isCyclic = function () {
        const order = this.order();
        const elements = this.elements();
        
        for (let n in elements)
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
        const l = this.values.length;
        
        for (let k = 0; k < l; k++)
            if (this.values[k] != k)
                return false;
        
        return true;
    }
    
    Permutation.prototype.order = function() {
        if (this.calculatedOrder)
            return this.calculatedOrder;
        
        let result = 1;
        let element = this;
        
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
        const l1 = values1.length;
        const l2 = values2.length;
        const l = Math.max(l1, l2);
        
        for (let k = 0; k < l; k++) {
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
        const l1 = values1.length;
        const l2 = values2.length;
        const l = Math.max(l1, l2);
        
        const values = new Array(l);
        
        for (let k = 0; k < l; k++) {
            let n = k;
            
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
        const values = new Array(length);
        
        for (let k = 0; k < length; k++)
            values[k] = k;
            
        return new Permutation(values);
    }
    
    function exchange(length) {
        const values = new Array(length);
        
        for (let k = 2; k < length; k++)
            values[k] = k;
            
        values[0] = 1;
        values[1] = 0;
            
        return new Permutation(values);
    }
    
    function cyclic(length) {
        const values = new Array(length);
        
        for (let k = 0; k < length - 1; k++)
            values[k] = k + 1;
            
        values[length - 1] = 0;
            
        return new Permutation(values);
    }
    
    function symmetric(n) {
        if (n === 1)
            return new Group(generate(identity(1)));

        const elements = generate(cyclic(n), exchange(n));
        
        return new Group(elements);
    }
    
    function generate() {
        const elements = [];
        
        for (let k = 0; k < arguments.length; k++) {
            const argument = arguments[k];
            
            if (!contains(elements, argument))
                elements.push(argument);
        }
        
        let k = 0;
        
        while (k < elements.length) {
            const element = elements[k];
            
            let j = k;
            
            while (j < elements.length) {
                const element2 = elements[j];
                let result = element.multiply(element2);
                
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
        for (let n in elements) {
            if (elements[n].equals(element))
                return true;
        }
        
        return false;
    }
    
    function createGroup() {
        for (let n in arguments)
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

