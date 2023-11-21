/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.filter(fn);
};

arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn))
