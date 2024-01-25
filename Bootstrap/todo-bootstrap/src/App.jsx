import AddTodo from "./components/AddTodo";
import { AppName } from "./components/AppName";
import TodoItem from "./components/TodoItem";
import './App.css';
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';


function App() {
  const [getTodo, setTodo] = useState([]);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo getTodo={getTodo} setTodo={setTodo} />
        <div>
          {getTodo.map((ele, ind) => 
          <TodoItem key={ind} todoName={ele.name} todoDate={ele.date} />
          )}
        </div>
      </center>
    </>
  );
}

export default App;
