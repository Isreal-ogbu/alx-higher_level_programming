#!/usr/bin/node
const firstArg = parseInt(process.argv);
function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    } else {
        return a + b;
    }
}
console.log(add(firstArg[2], firstArg[3]));