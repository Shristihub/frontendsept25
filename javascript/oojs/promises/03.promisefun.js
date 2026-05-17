function getAllUsers() {
    let users = [];
    let promise = new Promise((resolve, reject) => {
        // doin some work in the backend. takes time
        // simulating the backend
        setTimeout(() => {
            console.log('working first in backend');
            // getting userlist from backend
            users = [
                { username: 'Raju', city: 'Ooty', userId: 10 },
                { username: 'Roni', city: 'Chennai', userId: 11 },
                { username: 'Rohan', city: 'Bangalore', userId: 12 },
            ]
            console.log('Printing next in backend');
            console.log(users.length);
            if (users.length > 1) {
                console.log('getting user data');
                resolve(users);
            }
            else
                reject("no user data")
        }, 2000);

        console.log("printing second");
    })
    return promise;
}
console.log('Printing first');


// this method returns a promise
//call then method on that
getAllUsers().then(data => console.log(data), e => console.log(e))

console.log();

function findById(userid) {
   return getAllUsers().then(userdata => {
        let nuser = userdata.find(user => user.userId == userid);
        if (nuser)
            return Promise.resolve(nuser);
        else
            return Promise.reject('user not found');
    },
        error => console.log(error));
}


// let promise1 = findById(12)
// promise1.then(data=>{},e=>{})

//shortcut
findById(10).then(user => console.log(user), e => console.log(e));



