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

//function with return type
let totalsum = function (x, y) {
    return x + y;
}
let sum = totalsum(10, 20);
console.log(sum);

//IIFE
(function () {
    console.log('great day');
})();

(function (username) {
    console.log(`Hello ${username}`);
})('Sri');

//arrow functions
let product = (x, y) => console.log(x * y);
product(1, 2);
product = (x, y) => x * y * 10
console.log(product(2, 1));

//function taking function as parameter
function greeter(username) {
    console.log(`Great day ${username}`);
}
//similar to having a method with interface as parameter
//sort(Comparator c)- in java
function greetUser(fn, username) {
    fn(username);
    console.log('welocome to js');
}
greetUser(greeter, 'Sri');


let calcsum = (x, y) => x + y;
let average = (calc, x, y) =>{
    let sum = calc(x, y); //calcsum(10,20);
    let avg = sum/2;
    return avg;
}

console.log(average(calcsum,20,40));


let aver = (calc,x,y)=>calc(x,y)/2; //implementation
let result = aver(calcsum,10,20);
console.log(aver(calcsum,30,40));
console.log(result);

//function returning an function
function details(username,city){
    console.log(username+" "+city);
    return function(salary){
        console.log(`Bonus ${salary+1000}`);
    }
}
let calcBonus =  details('Sri','Goa');
calcBonus(1000);

function details1(username,city,salary){
    console.log(username+" "+city);
    return function(salary){
        console.log(`Bonus ${salary+1000}`);
        return 2000;
    }(salary);
    
}
let result1 =details1("Jo","Pune",20000);
console.log(result1);
// function inside another function
// function calcAverage(x,y,z){
//     let sum = x+y+z;
//     function avg(){
//         let avg1 = sum/3;
//         return avg1;
//     }
//    return avg();
// }

function calcAverage(x,y,z){
    let sum = x+y+z;
    return function(){
        let avg1 = sum/3;
        return avg1;
    }(); //IIFE
}
console.log(calcAverage(10,20,30));

//rest and spread
//argument
//array
//modules
// import and export
//promises and async
