import React from "react";
import { useState } from "react";
import './TodoList.css'


const TodoList = () => {
  const [inputType, setInputType] = useState("");
  // set the initial list
  //EXAMPLE-1
  const [todoList, setTodoList] = useState(["Learn React","Do Work"]);
  let addTodo = () => {
    // alert(inputType);
    // let arr=[1,2,3];
    //use spread operator to spread the values
    //    let arr1 = [...arr,4,5,6,parseInt(inputType)]
    //    console.log(arr1);
    //spread the existing list and add the new one
    //EXAMPLE-1
    setTodoList([...todoList, inputType]);
    setInputType("");
    
  }
  


  return (
    <div className="todocontainer">
      <input
        type="text"    name="todo"  id="todo"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      />
      <button type="button" onClick={() => addTodo()}>Add Todo</button>
      <div>
        <ul className='mylist'>
          {todoList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
