#!/usr/bin/node
module.exports = {
    callmebody : function(n,f) {
        for (let i = 0; i < n; i++) {
            f();
        }
    }
};
