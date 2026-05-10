
const promise1 = new Promise(function (resolve, reject) {
    let x = 1;
    setTimeout(() => {
        if (x > 10) {
            // console.log("Promise one");
            resolve("Promise one executed");
        } else
            reject("Error");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    let x = 2;
    setTimeout(() => {
        if (x > 10) {
            // console.log("Promise two");
            resolve("Promise two executed");
        } else
            reject("Error occured");
    }, 1000);
});
//  returns all the promises that is rejected  and resolved
const promiseall = Promise.allSettled([promise1, promise2])
promiseall.then(allvalues => {  
        allvalues.forEach(obj => {
            console.log(`Status ${obj.status}`);
            console.log(`Value ${obj.value}`);
            console.log(`Error ${obj.reason}`);
            console.log(obj);
            console.log();
        });
    }, error => {
        console.log(error);    
    });



