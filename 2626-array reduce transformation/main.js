/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    ans = init;
    for (let num of nums) {
        ans = fn(ans, num);
    }
    return ans;
};


nums = [1,2,3,4];
fn = function sum(accum, curr) { return accum + curr; }
init = 0;

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

console.log(reduce(nums, fn, init));
