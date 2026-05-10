greet('Priya')
greet()
//function declaration
function greet(){
 console.log('Hello from js ');
}
// ist function is replaced/overwritten by the second one
function greet(username){
 console.log('Hello from js ',username);
 console.log('Hello from js '+username);
 console.log(`Hello from js ${username}`);

}
// greet();
