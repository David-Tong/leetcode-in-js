/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let ans = x;
        for (let index = functions.length - 1; index >= 0; index--) {
            ans = functions[index](ans);
        }
        return ans;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
let fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));

fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn(1));

fn = compose([]);
console.log(fn(42));
