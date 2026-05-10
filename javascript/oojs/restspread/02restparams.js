//rest parameter
function total(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
// values are combined into array
total(10, 20);
total(10, 20, 30, 40);
total(10, 20, 30, 40, 50);

//OLDER ONE
// passing Array
let sum2 = function(arr){
    console.log(arr.length);
   let total = 0;
    for(let i=0; i<arr.length; i++){
         total += arr[i];
    }
    console.log(total);
}
sum2([10,20,30,40,50]);
sum2([100,200,300]);


//args
let sum = function(){
   let total = 0;
    for(let i=0; i<arguments.length; i++){
         total += arguments[i];
    }
    console.log(total);
}
sum(10,20,30,40,50);
sum(100,200,300);



//rest parameter
let sum1 = function(...args){
    let total = 0;
   args.forEach((arg) => {
        total += arg;
    });
    console.log(total); 
}
sum1(10,20,30,40,50);

//spread operator
let arr1 = [170,520];
let arr2 = [30,40,50,90,130,20];
let arr3 = [...arr1,...arr2];

let emp = {empname:'SRI', empid:101};
let address = {city:'HYD', state:'TS'};
let details = {
    ...emp,...address,mobile:903339
}
console.log(details);
console.log(Math.max(20,45,98,120,1,2,3));
console.log(Math.max(...arr1,...arr2));
