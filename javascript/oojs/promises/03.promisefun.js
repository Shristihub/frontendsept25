function getAllUsers() {
    let users = [];
    let promise = new Promise((resolve, reject) => {
        // doin some work in the backend. takes time
        // simulating the backend
        setTimeout(() => {
            console.log('Printing first in backend');
            // getting userlist from backend
            users = [
                { username: 'Raju', city: 'Ooty', userId: 10 },
                { username: 'Roni', city: 'Chennai', userId: 11 },
                { username: 'Rohan', city: 'Bangalore', userId: 12 },
            ]
            console.log('Printing next in backend');
            console.log(users.length);
            if (users.length==1)
                resolve(users);
            else
                reject("no user data")
        }, 2000);

        console.log("prints third");
    })
    return promise;
}
console.log('Printing second');


// this method returns a promise
//call then method on that
getAllUsers().then(data => console.log(data), e => console.log(e))

console.log();

function findById(userid) {
  return getAllUsers().then(users => {
        let user = users.find(user => user.userId == userid);
        if (user)
            return Promise.resolve(user);
        else
            return Promise.reject("invalid user");
    }, error => {
        console.log(error);
    });
};

// let promise1 = findById(12)
// promise1.then(data=>{},e=>{})

findById(120).then(user => console.log(user), e => console.log(e));



