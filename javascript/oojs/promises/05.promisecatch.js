let promise = new Promise((resolve, reject) => {
    let mobiles = [
        { model: 'A123', brand: 'Samsung', price: 20000 },
        { model: 'B123', brand: 'Samsung', price: 20000 },
        { model: 'M12', brand: 'Vivo', price: 8000 }
    ];
    let x = 10;
    setTimeout(() => {
        if (x > 1)
            resolve(mobiles)
        else
            reject("no data")
    });
})
// promise.then(data=>{},e=>{}).catch(e=>{}).finally(()=>{})
promise.then(mobiles => {
    console.log(mobiles);
    let moblist = mobiles.filter(mobile => mobile.brand == 'Apple');
    if (moblist.length == 0)
        throw new Error('no mobiles available')
}, error => {
    console.log(error);
    throw error;
})
    .catch(ex => console.log('errr ' + ex))
    .finally(() => console.log('close'))

