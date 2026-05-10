let promise = new Promise((resolve,reject)=>{
    let x=10;
    if(x>1){
        resolve(x);
    }else
        reject("Error");
});
// first handler
promise.then((val)=>{
    console.log(val); //10
    return val*2; // returns a promise
});

//second handler
let promise1 = promise.then(num=>{
    console.log(num);//10
    return num*3; // returns a promise
});

//third handler
promise.then(num=>{
    console.log(num); //60
})