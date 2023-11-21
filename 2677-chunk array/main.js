/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let ans = [];
    let sub = [];
    for (let i = 1; i <= arr.length; i++) {
        sub.push(arr[i - 1]);
        if (i % size == 0) {
            ans.push(sub);
            sub = [];
        }
    }
    if (sub.length > 0) {
        ans.push(sub);
    }
    return ans;
};

arr = [1,2,3,4,5], size = 1;
arr = [1,9,6,3,2], size = 3;
arr = [8,5,3,2,6], size = 6;

console.log(chunk(arr, size));