#!/usr/bin/node

const Rectangle = require("./4-rectangle");
modules.extends = class Square extends Rectangle {
    constructor (size) {
        super(size)
    }
};
