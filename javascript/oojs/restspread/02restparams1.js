//pasing array as argument to a function
function calcsum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }  
    console.log(sum);     
}
calcsum([]);
calcsum([90,80,70]);
calcsum([90,80,70,80]);
console.log()
console.log();

//arguments object- array like object available inside every function
function calcsum1(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }  
    console.log(sum);     
}
calcsum1();
calcsum1(90,80,70);
calcsum1(90,80,70,80);

//rest parameters- an array of values passed as arguments to a function
function calcsum2(...nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }  
    console.log(sum);     
}
calcsum2();
calcsum2(90,80,70);
calcsum2(90,80,70,80);
