let arr =['apple','banana','grapes'];

arr.forEach((val,index,arr)=>{
    console.log(val.toUpperCase());
    console.log(arr[index]);
    console.log(arr);
})
arr.forEach(val=>console.log(val.toUpperCase()));