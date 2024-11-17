import { sayHello } from './packages/ui/src/index.mjs';

const greet = ()=>`${sayHello()} and Package @alvin/hooks`;
console.log(greet());

export { greet };
