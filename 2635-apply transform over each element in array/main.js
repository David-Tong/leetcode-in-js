/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map((x, i) => fn(x, i));
};

arr = [1,2,3];
fn = function plusone(n) {
    return n + 1;
}

let newArray = map(arr, fn)
console.log(newArray);

newArray = map(arr, (n, i) => {return n + i; });
console.log(newArray);

newArray = map(arr, () => {return 42});
console.log(newArray);
