let num1;          // undefined
let num2 = 90 
console.log(num1);
console.log(num2);
console.log(num2+num1); //NaN
greet()
// function declaration
function greet() {
    console.log('welcome to js')
    console.log(num2+num1);//NaN
}
let username;
username='Sri'
let message = 'Great day'

// mymessage();
//function expression
let mymessage = function () {  // undefined
    console.log(message+username)

}
mymessage()
let num3=100;
let sum = function(){
    console.log(num2+num3);

}
sum();



