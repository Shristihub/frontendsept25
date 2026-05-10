// PromiseChaining
let promise = new Promise((resolve,reject)=>{
    let x=10;
    if(x>1){
        resolve(x);
    }else
        reject("Error");
});
let promise1 = promise.then(num=>{
    console.log(num);
    return num*2;
})
promise1.then(num=>{
    console.log(num);
    return num*3;
})
.then(num=>num*5)
.then(res=>console.log(res))