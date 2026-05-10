let arr = [10,20,30,40]

let[x,y]=arr
console.log(`${x}..${y}`);
let[a,,b,c=10,d=20,e]=arr
console.log(a); //10
console.log(b); //30
console.log(c); //40
console.log(d); //20
console.log(e);//undefined
console.log();
let emp = {empName:'Sri',empId:10}
console.log(emp.empName+" "+emp.empId); // this is replaced by destructuring
let {empName,empId}= emp; // the property names should be same
console.log(empName);
console.log(empId); // no need to call as emp.empId

let {ename, city='goa',eid} = {ename:'Sri',eid:10}
console.log(`welcome ${ename} from ${city} with emp id ${eid}`);





