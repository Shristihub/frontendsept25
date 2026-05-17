
let promise = new Promise((resolve, reject) => {
    let x = 100;
    setTimeout(function () {
        if (x > 10) {
            resolve(x);
        } else {
            reject('error');
        }
    }, 2000);
    // this will be printed first as the promise is asynchronous
    console.log('print first');

});

promise.then(data => console.log(data), error => console.log(error));
