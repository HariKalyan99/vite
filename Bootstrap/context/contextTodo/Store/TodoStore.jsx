import { createContext, useReducer } from "react"



export const TodoStore = createContext({
    getTodo: [], handleTodoAdd: () => {}, handleTodoDelete: () => {}
    // these are for the suggestions to pop in while you are referring to the todoStore
})

// or even the below will work

// export const TodoStore = createContext([])

// in terms of useReducer 

// pure function 

const todoItemsReducerPure = (currentState, action) => {
    let newGetTodo = currentState;
    if(action.type === "NEW_ITEM"){
      const sameName = currentState.find((ele) => ele.name === action.payload.getName);
      if(!sameName){
        newGetTodo = [...currentState, {name: action.payload.getName, date: action.payload.getDate}];
      }else{
        alert("Todo already exists");
      }
    }else if(action.type === "DELETE_ITEM") {
      newGetTodo = currentState.filter((todoItem) => todoItem.name !== action.payload.delName);
    }
    return newGetTodo;
  }



const TodoStoreContextProvider = ({children}) => {
  const [getTodo, dispatchTodoItems] = useReducer(todoItemsReducerPure, []);

    const addNewItem = (getName, getDate) => {
        const newItemAction = {
          type: "NEW_ITEM",
          payload : {
            getName,
            getDate
          }
        };
        dispatchTodoItems(newItemAction);
      }
    
      const deleteTodo = (delName) => {
        const deletItemAction = {
          type: "DELETE_ITEM",
          payload: {
            delName,
          }
        }
        dispatchTodoItems(deletItemAction);
      }

      return <TodoStore.Provider value={{getTodo: getTodo, handleTodoAdd: addNewItem, handleTodoDelete: deleteTodo}}>
        {children}
      </TodoStore.Provider>
}

export default TodoStoreContextProvider;