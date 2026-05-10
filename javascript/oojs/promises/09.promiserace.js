
const promise1 = new Promise(function (resolve, reject) {
    let x = 100;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise one");
            resolve("Promise one executed");
        } else
            reject("Error");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    let x = 2;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise two");
            resolve("Promise two executed");
        } else
            reject("Error occured");
    }, 100);
});
//  returns one promise whichever comes faster 
const promiseall = Promise.race([promise1, promise2])
promiseall.then(allvalues => {
        console.log(allvalues);
}, error => {
    console.log(error);
});



