// synchronous
function getUsers() {
    let users = [
        { username: 'Raju', city: 'Ooty', userId: 10 },
        { username: 'Roni', city: 'Chennai', userId: 11 },
        { username: 'Rohan', city: 'Bangalore', userId: 12 },
    ]
    console.log('Prints first');
    return users;
}
console.log(getUsers());


// asynchronous
function getAllUsers() {
    let users = [];
    // doin some work in the backend. takes time
    // simulating the backend
    setTimeout(()=>{
        console.log('Printing first in backend');
        // getting userlist from backend
        users = [
        { username: 'Raju', city: 'Ooty', userId: 10 },
        { username: 'Roni', city: 'Chennai', userId: 11 },
        { username: 'Rohan', city: 'Bangalore', userId: 12 },
    ]
    console.log('Printing next in backend');
    },3000)
    console.log("prints third");
  return users;
}
console.log('Printing second');
console.log(getAllUsers());

// function findById(userid) {
//     // return getUsers().find(user => user.userId == userid)
//     return getAllUsers().find(user => user.userId == userid)
// }
// console.log(findById(12));

