#!/usr/bin/node
const myagr = process.agrv[2];
if (myagr === undefined) {
    console.log('No argument');
} else {
    console.log(myagr);
}