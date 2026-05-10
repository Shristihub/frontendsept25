//function declaration
function greet(username) {
    console.log(`Hello from js ${username}`);
}
greet('Sri');

//function expression
let welcomeUser = function (username) {
    console.log(`Welcome ${username}`);
}
//call ONLY after the function is created
welcomeUser('Priya');

