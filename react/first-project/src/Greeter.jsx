import React, { useState } from 'react'

const Greeter = ({uname}) => {
    const[username,setUsername] = useState(uname)
    const showMsg =()=>{
        alert('Great day');
        console.log('Have  a great day');
    }
    return (
    <div>
      <h1>Welcome {username}</h1>
      <input type="text" name="choice" 
             value={username} 
             onChange={(e)=>setUsername(e.target.value)}></input>
      <button onClick={()=>showMsg()}> ShowMessage</button>
      <button onClick={showMsg}> ShowMessage</button>
    </div>
  )
}

export default Greeter
