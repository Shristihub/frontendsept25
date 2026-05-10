let promise = new Promise(function (resolve, reject) {
    let x = 1;
    // this is like a backend operation
    //simulating the backend
    setTimeout(() => {
        if (x > 10)
            resolve(x);
        else
            reject("error");
    }, 1000);
    console.log('Print first');
});

// call the then which takes success callback, errorcallback
promise.then(function success(data) {
    console.log(data);
}, function errorCallback(error) {
    console.log(error);
})

promise.then(data => console.log(data), error => console.log(error))
