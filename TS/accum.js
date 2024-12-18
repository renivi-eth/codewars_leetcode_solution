"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accum = accum;
function accum(s) {
    return s
        .split("")
        .map(function (a, i) { return a.toUpperCase() + a.toLowerCase().repeat(i); })
        .join("-");
}
console.log(accum("abcd"));
