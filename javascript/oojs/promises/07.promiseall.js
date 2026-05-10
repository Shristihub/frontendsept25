
const promise1 = new Promise(function (resolve, reject) {
    let x = 100;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise one in console");
            resolve("Promise one executed");
        } else
            reject("Error");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    let x = 20;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise two");
            resolve("Promise two executed");
        } else
            reject("Error occured");
    }, 2000);
});
//  returns a promise that is rejected 
const promiseall = Promise.all([promise1, promise2])
promiseall
    .then(allvalues => {  // this will not be executed
        allvalues.forEach(value => {
            console.log(value);
        });
    }, error => {
        console.log(error);    });


// any
// if u have rejected and fulfilled promise 
// only the fulfilled one will be executed
// if u have many fulfilled promise 
// the one that finishes faster will be executed
// if u have all rejected promises 
// then prints all rejected promises

// all
// if u have rejected and fulfilled promise 
// only the rejected will be executed
// if u have many fulfilled promise 
// all will be executed
// if u have all rejected promises 
// the one that finishes faster will be executed
