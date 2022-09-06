#!/usr/bin/node
const SquareModel = require('./5-square');

module.exports = class Square extends SquareModel {
    constructor (size) {
    super(size, size);
  }
  charprint (c) {
    this.print(c)
  }
};
