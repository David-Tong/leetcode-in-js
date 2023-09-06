/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

argsArr = [5]
console.log(argumentsLength(...argsArr));

argsArr = [{}, null, "3"];
console.log(argumentsLength(...argsArr));

argsArr = [1, 2, 3, 4, 5];
console.log(argumentsLength(...argsArr));
