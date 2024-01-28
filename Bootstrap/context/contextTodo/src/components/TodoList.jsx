import React, { useContext } from 'react'
import styles from './TodoList.module.css';
import TodoBucket from './TodoBucket';
import { TodoStore } from '../../Store/TodoStore';


const TodoList = () => {

    const {getTodo, handleTodoDelete} = useContext(TodoStore);
    const getTodoDataFromContext = getTodo;
    const onDeleteTodo = handleTodoDelete;

  return (
      <>
      {getTodoDataFromContext.map((ele, ind) => ( 
            <TodoBucket key={ind} todoName={ele.name} todoDate={ele.date} onDeleteTodo={onDeleteTodo}/>
        ))}
      </>
  )
}

export default TodoList