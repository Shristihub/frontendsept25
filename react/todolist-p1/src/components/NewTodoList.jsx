import React from "react";
import { useState } from "react";
import './TodoList.css'


const NewTodoList = () => {
  const [inputType, setInputType] = useState("");
  // set the initial list
  //EXAMPLE-2 -passing object instead of string
  const [todoList, setTodoList] = useState([{id:1,text:"Learn React"},{id:2,text:"Do Work"}]);
  let addTodo = () => {
    //EXAMPLE-2
    setTodoList([...todoList, {id:todoList.length+1,text:inputType}]);
    setInputType("");
    
  }
  let deleteTodo =(id)=>{
    //remove the item having this id -remaining items will be there
    let updatedList =todoList.filter(todo=>todo.id!=id);
    setTodoList(updatedList);
  }


  return (
    <div className="todocontainer">
      <input
        type="text"    name="todo"  id="todo"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      />
      <button type="button" onClick={addTodo}>+
        
      </button>
      <div>
        <ul className='mylist'>
          {todoList.map((todo) => (
            <li key={todo.id}>{todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>Completed</button>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewTodoList;
