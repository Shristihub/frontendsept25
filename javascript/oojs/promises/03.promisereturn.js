let promise = new Promise((resolve, reject) => {
    let x = 10;
    setTimeout(() => {
        if (x > 1) {
            resolve(x * 2);
        } else
            reject("Error");
    }, 1000);
});
var promise1 = promise.then((val) => {
    console.log(val); //20
    // returns a promise
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(val>10)
             resolve(val * 2);
            else
            reject('error');
        }, 1000);
    })
}, (error) => {
    console.log(error);
});
var promise2 = promise1.then(num => {
    console.log(num);//40
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 4);
        }, 1000);
    })
});
promise2.then(num => {
    console.log(num); //160
})

