#!/usr/bin/node
const Square = require('./5-square');

module.exports = class Square extends Square {
    constructor (size) {
    super(size, size);
  }
  charprint (c) {
    if (c) {
        console.log(c)
    } else {
        console.log('X')
    }
  }
};
