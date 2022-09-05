#!/usr/bin/node
const myagr = process.agrv[2];
if (myagr) {
    console.log(myagr);
} else {
    console.log('No argument');
}