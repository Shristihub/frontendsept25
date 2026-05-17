
//like a private function
const checkName = (username) => username == 'Sri' ? true : false

export const greeter = (username) => {
  if (checkName(username)) {
    console.log(`Have a great day ${username}`);
  } else {
    console.log('Invalid username');
  }
}
export const mymessage = 'hello';

export const sum = (x, y) => x + y

//this will not be exported as it is not exported using export keyword
const message = 'Have a great day';

const num=20;
const username = 'priya';

//group and export
export {num,username}

let myfun = ()=>{
  console.log('learning default exports');
}
export default myfun;


