#!/usr/bin/node
let factorial = parseInt(process.argv[2]);
function fac(n) {
    if (isNaN(n)){
        return 1
    } if (n == 1) {
        return n
    } else {
        return n * fac(n-1)
    }
}
console.log(fac(factorial))