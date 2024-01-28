import React, { useContext } from "react";
import { TodoStore } from "../../Store/TodoStore";

const TodoBucket = ({ todoName, todoDate }) => {
  const { handleTodoDelete } = useContext(TodoStore);
  const onDeleteTodo = handleTodoDelete;
  return (
    // <div className={styles.todoContainer}>
    //         <h1>{todoName}</h1>
    //         <h1>{todoDate}</h1>
    //         <button className={styles.btn} onClick={() => onDeleteTodo(todoName)}>Delete</button>
    // </div>

    <div className="container ">
      <div className="row myRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger myButton"
            onClick={() => onDeleteTodo(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoBucket;
