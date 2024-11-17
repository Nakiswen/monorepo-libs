'use strict';

var index = require('./packages/ui/src/index.cjs');

const greet = ()=>`${index.sayHello()} and Package @alvin/hooks`;
console.log(greet());

exports.greet = greet;
