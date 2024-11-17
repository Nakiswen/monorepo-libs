'use strict';

var index = require('./components/Button/index.cjs');
var index$1 = require('./components/Input/index.cjs');

const a = 2;
console.log("❤❤❤❤❤❤❤❤", a);
const sayHello = ()=>'Hello from Package @alvin/ui';

exports.Button = index.Button;
exports.Input = index$1.Input;
exports.sayHello = sayHello;
