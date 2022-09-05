#!/usr/bin/node
let factorial = parseInt(process.argv[2]);
function fac(n) {
    if (isNaN(a)){
        return 1
    } if (n == 1) {
        return n
    } else {
        return n * fac(n-1)
    }
}