
const promise1 = new Promise(function (resolve, reject) {
    let x = 1;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise one");
            resolve("Promise one executed");
        } else{
            console.log('error in console');
            reject("Error- no data");
        }
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    let x = 2;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise two");
            resolve("Promise two executed");
        } else
            reject("Error");
    }, 2000);

});
//  returns a single fulfilled promise that resolves to a value 
const promiseall = Promise.any([promise1,promise2])
// only promise2 executed
promiseall.then(value => {
    console.log(value);
}, error => {
    console.log(error);
})



