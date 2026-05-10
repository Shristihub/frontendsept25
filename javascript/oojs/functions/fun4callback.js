console.log('hello first');
// setTimeout(function(){
//     console.log('Great day');
// },3000);
setTimeout(() => console.log('Great day'), 3000);
console.log('This will be printed second');

setInterval(()=>console.log('hello'),3000);
console.log('Third');

names = ['Raja','Roni','Sera','Anika'];
// names.forEach((value,index,arr)=>{
//     console.log(value);
//     console.log(index);
//     console.log(arr);

// })

names.forEach(val=>console.log(val))