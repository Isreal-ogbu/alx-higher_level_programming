#!/usr/bin/node
module.exports = function nbOccurences(list, val) {
    let count = 0;
    for (let j = 0; j < list.length; j++) {
        if (list[j] == val){
            count ++
        }
    } return count
};
