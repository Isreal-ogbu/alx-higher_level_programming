#!/usr/bin/node
exports.esrever = function (list) {
    const val = []
    for (let i = list.length-1; i >= 0; i--) {
        val.push(list[i])
    }
    return val
};
