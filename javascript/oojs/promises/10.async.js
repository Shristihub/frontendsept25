// helps to return a promise
 sayHello = async username => {
    return `Hello ${username}`;
}
sayHello('Priya').then((val) => console.log(val));

async function greetUser(username){
     return `Good night ${username}`;
} 


// similar to this is sayHello()
let greet = (username) => {
    return new Promise((resolve, reject) => {
        resolve(`Great Day ${username}`);
    })
};
greet('Nami').then((data) => console.log(data));

let welcomeUser = (uname)=>{
  return Promise.resolve(`Welcome ${uname}`);
}
welcomeUser('Sri').then((val) => console.log(val));
greetUser('Roni').then((val) => console.log(val));
