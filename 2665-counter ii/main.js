/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return {
        "increment": () => {
            count += 1;
            return count;
        },
        "reset": () => {
            count = init;
            return count;
        },
        "decrement": () => {
            count -= 1;
            return count;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
