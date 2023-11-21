/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(
        () => fn(...args), t);
    const cf = () => {
        clearTimeout(timeoutId);
    };
    return cf;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

const result = []
const fn = (x1, x2) => x1 * x2
const args = [2, 4], t = 30, cancelT = 100

const start = performance.now()

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)})
}       

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelT)

setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)