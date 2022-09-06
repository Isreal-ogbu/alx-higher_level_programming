#!/usr/bin/node
module.exports = class Rectangle {
    constructor (w,h) {
        if (w < 0 || h < 0 || isNaN(w) || isNaN(h)) {
            return
        } else {
            this.width = w;
            this.height = h;
        }
    }
    print () {
        for (let i = 0; i < this.height; i++){
            console.log('X'.repeat(this.width))
        }
    }
    rotate () {
        let a = this.width;
        let b = this.height;
        this.width = b;
        this.height = a;
    }
    double () {
        this.width = this.width * 2;
        this.height = this.height * 2;
    }
};