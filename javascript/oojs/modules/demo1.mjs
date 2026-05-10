//alias name
import {message as msg, sum as total} from './details.mjs'
// call default exports directly
import greeter from './checkdef.mjs'
import { mymessage } from './checkdef.mjs';

console.log(msg);
let result = total(10,20);
console.log(result);
console.log(mymessage);

greeter('Sri')