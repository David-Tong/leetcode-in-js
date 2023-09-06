Array.prototype.last = function() {
    if (this.length == 0) {
        return -1;
    } else {
        return this.at(-1);
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

let nums = [1, 2, 3];
console.log(nums.last());

nums = [null, {}, 3];
console.log(nums.last());

nums = [];
console.log(nums.last());
