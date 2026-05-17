//call named exports using the same name as exported 
//  we can use alias name
import { greeter,mymessage as msg,sum,num,username } from "./trial1.mjs";

//importing default export
// call default exports directly
import myfun from "./trial1.mjs";


let mymessage = 'welcome to modules';
console.log(mymessage);
console.log(msg);
let result = sum(10,20);
console.log(result);    
greeter('Sri');
console.log(username,num);
myfun();