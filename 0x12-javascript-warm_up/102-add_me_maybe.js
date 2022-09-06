#!/usr/bin/node
module.exports = {
    addmeback : (number, thefunction) => {
        return thefunction(number + 1)
    }
}