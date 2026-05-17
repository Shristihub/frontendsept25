import { '*' as trial } from "./trial1.mjs";

// to import all the exports from a module we can use * as aliasname
console.log(trial.mymessage);
console.log(trial.msg);
let result = trial.sum(10,20);
console.log(result);    
trial.greeter('Sri');