let nums1 =[10,20,30]
let nums2 =[40,50]

//spread the data - arrays to separate values
let nums3 = [...nums1,...nums2,60,70];
nums3.forEach(ele=>console.log(ele))

let employee = {username:'priya',department:'admin'}
let address={city:'Bengaluru'}

let details={...employee,...address,state:'Kar',salary:2000}
console.log(details);

