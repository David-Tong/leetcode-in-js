/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;    
	return function(...args){
        if (!called) {
            called = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

//console.log(onceFn(1,2,3))
//console.log(onceFn(2,3,6))

fn = (a1,a2,a3,a4,a5,a6,a7) => (a1 * a5 - a7)
console.log(onceFn(6,4,2,4,5,3,2))
