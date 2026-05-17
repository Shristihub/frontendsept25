greet();
// function declaration
function greet(){
    console.log('welcome to js');
}
//function with parameters and return type
function add(a,b){
    console.log(`Sum ${a+b}`);
    return a+b;
}
let sum = add(10,20);
console.log(sum);

//function expression
let sayHello = function(){
    console.log('Great day');
}
sayHello(); //call only after the function is created

//IIFE
(function(){
    console.log('Great day');
})();
(function(a, b){
    console.log(`Sum ${a+b}`);
})(10,20);

function userData(username,city){
    console.log(`Name: ${username}, City: ${city}`);
}

//function that takes function as an argument
function showDetails(fn,username,city,message){
    console.log('Printing details:');
    fn(username,city);
    console.log(message);
}

showDetails(userData,'Sri','Bangalore','Great day');
showDetails((uname,city)=>console.log('hello'+uname),'Sri','Bangalore','Great day');



//arrow function- lambda function
let show = ()=>console.log('Great day');
show();
let product = (x,y)=> x*y; //arrow function with return type
console.log(product(10,20));
  
//function with an inner function
function userDetails(username,city,salary){
    console.log(`Name: ${username}, City: ${city}, Salary: ${salary}`);
    // inner function
    let bonus = function(){
        console.log('Bonus calculation');
        let bonusval = salary*0.1;
        console.log(`Bonus: ${bonusval}`);
        return bonusval;
    }
    return bonus(); //call the function and return the value

}
// returning the value
let bonus = userDetails('Sri', 'Bangalore', 50000);
console.log(bonus);


//function with an inner function returning a function
function userDetails1(username,city,salary){
    console.log(`Name: ${username}, City: ${city}, Salary: ${salary}`);
    // inner function
    let bonus = function(){
        console.log('Bonus calculation');
        let bonusval = salary*0.1;
        console.log(`Bonus: ${bonusval}`);
       
    }
    return bonus; // returning the inner function

}
// returning the inner function
let bonusFunc = userDetails1('Sri', 'Bangalore', 50000);
bonusFunc(); // calling the inner function

//function returning an inner function that returns a value
function userDetails2(username,city,salary){
    console.log(`Name: ${username}, City: ${city}, Salary: ${salary}`);
    // returns inner function
   return function(){
        console.log('Bonus calculation');
        let bonusval = salary*0.1;
        console.log(`Bonus: ${bonusval}`);
        return bonusval; // returns value to the outer function
    }
}
// returning the inner function
let bonusFunc1 = userDetails2('Sri', 'Bangalore', 50000);
let bonus11 = bonusFunc1(); //  the inner function returns a value
console.log(bonus11);


// callback function- a function passed as an argument to another function

let callbackHandler = function(){
    console.log('hello from callback');
}
setTimeout(callbackHandler, 3000); // callback function called after 3 seconds

setTimeout(()=>console.log('hello from callback'),5000); // arrow function as callback