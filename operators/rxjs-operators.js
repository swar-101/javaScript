"use strict";
exports.__esModule = true;
/*
example of how RxJS operators work
    for e.g. using pipe()
*/
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var test1 = (0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var case1 = test1.pipe((0, operators_1.filter)(function (x) { return x % 2 === 0; }), (0, operators_1.reduce)(function (acc, one) { return acc + one; }, 0));
case1.subscribe(function (x) { return console.log(x); });
/*
Creation Observable operator: from()
   This operator will create observable from
    - an array
    - an array like object
    - a promise
    - an iterable object
    - an observable-like object
*/
var rxjs_2 = require("rxjs");
var arr = [2, 4, 6, 8, 10];
var test = (0, rxjs_2.from)(arr);
test.subscribe(function (x) { return console.log(x); });
/*
Creation Observable operator: fromEvent()
    This operator will give output as an
    observable that is to be used on elements
    that emit events for e.g. buttons,
                              clicks, etc.
*/
var rxjs_3 = require("rxjs");
var operators_2 = require("rxjs/operators");
var btn = document.getElementById("btnclick");
var btn_clicks = (0, rxjs_3.fromEvent)(btn, 'click');
var interval_events = (0, rxjs_3.interval)(1000);
var buffered_array = interval_events.pipe((0, operators_2.buffer)(btn_clicks));
buffered_array.subscribe(function (arr) { return console.log(arr); });
