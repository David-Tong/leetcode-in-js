/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

obj = {"x": 5, "y": 42};
obj = {};
obj = [null, false, 0];

console.log(isEmpty(obj));
