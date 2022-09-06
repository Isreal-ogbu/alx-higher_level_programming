#!/usr/bin/node
exports.esrever = function (list) {
    let val = []
    for (let i = list.length; i >= 0; i--) {
        val.push(list[i])
    }
    return val
}