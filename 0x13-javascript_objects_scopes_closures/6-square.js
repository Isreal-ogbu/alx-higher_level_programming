#!/usr/bin/node
const SquareModel = require('./5-square');

module.exports = class Square extends SquareModel {
  constructor (size) {
    super(size, size);
  }

  charPrint (c = '') {
    if (c) {
        for (let i = 0; i < this.size.length; i++) {
            console.log(c.repeat(this.size))
        }
    }
    this.print();
  }
};
