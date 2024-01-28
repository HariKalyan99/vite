import React, { useContext, useRef } from 'react'
import styles from './AddTodo.module.css'
import { TodoStore } from '../../Store/TodoStore';


const AddTodo = () => {

    const { handleTodoAdd } = useContext(TodoStore);
    const onAddTodo = handleTodoAdd;
    
    const nameRef = useRef("");
    const dateRef = useRef("");
    const divRef = useRef('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(nameRef.current.value && dateRef.current.value){
        onAddTodo(nameRef.current.value, dateRef.current.value);
        // divRef.current.innerHTML = `<h1>Complete the task and delete</h1>`
        nameRef.current.value = "";
        dateRef.current.value = "";
        }
    }

  return (
    <form className={"container text-center"} onSubmit={onFormSubmit}>
        {/* <input type="text" placeholder='Add todo here' className={styles.inputBar} ref={nameRef}/>
        <input type="date"  className={styles.inputBar}  ref={dateRef}/>
        <button className={styles.btn}>Add Todo</button> */}

<div className="row myRow">
            <div className="col-6">
              <input type="text" placeholder="Enter todo here" 
              ref={nameRef}
               />
            </div>
            <div className="col-4">
              <input type="date"
              ref={dateRef}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success myButton">
              Add Todo
              </button>
            </div>
            {/* <div ref={addSomeHtml}>

            </div> */}
          </div>



        {/* <div ref={divRef}></div> */}
    </form>
  )
}

export default AddTodo