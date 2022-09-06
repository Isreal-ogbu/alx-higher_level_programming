#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr() {
        let b = 1;
        myObject.value = b + myObject.value
    }
};
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);