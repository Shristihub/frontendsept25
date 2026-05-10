function sum(x,y){
    console.log(x+y);
}
sum(10,20);
sum();// NaN
sum(10);//NaN
console.log();
function calcSum(x=100,y=10){
    console.log(x+y);
}
calcSum();//110 
calcSum(10);//20;
// value of x is replaced to 100
calcSum(undefined,20); //120 just want to chenga of value of y

function calcSum1(x=1,y=x,z=x+y){
    console.log(x+y+z);
}
calcSum1();//4
calcSum1(undefined);//4;
calcSum1(NaN);//NaN;

function area(length=10,breadth){
    console.log(length*breadth);
}
area(20,20);
area(100);
area(undefined,1);

// evaluates the default arguments at the time you call the function
function addNames(username, names=[]){
    names.push(username);
    return names;
}
let names = addNames('Raju',['lucky','Ravi']);
names.forEach(name => console.log(name));
console.log(addNames('Rohan'));
console.log(addNames('Poppy',['Sri','Priya']));

