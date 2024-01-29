import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import TodoList from './components/TodoList'
import WelcomeMessage from './components/WelcomeMessage'
// import { useReducer } from 'react'
import TodoStoreContextProvider from '../Store/TodoStore'


// pure function 

// const todoItemsReducerPure = (currentState, action) => {
//   let newGetTodo = currentState;
//   if(action.type === "NEW_ITEM"){
//     const sameName = currentState.find((ele) => ele.name === action.payload.getName);
//     if(!sameName){
//       newGetTodo = [...currentState, {name: action.payload.getName, date: action.payload.getDate}];
//     }else{
//       alert("Todo already exists");
//     }
//   }else if(action.type === "DELETE_ITEM") {
//     newGetTodo = currentState.filter((todoItem) => todoItem.name !== action.payload.delName);
//   }
//   return newGetTodo;
// }


function App() {
  // const [getTodo, setTodo] = useState([]);
  // const [getTodo, dispatchTodoItems] = useReducer(todoItemsReducerPure, []);


  // const addNewItem = (getName, getDate) => {

  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload : {
  //       getName,
  //       getDate
  //     }
  //   };
  //   dispatchTodoItems(newItemAction);



  //   // const sameName = getTodo.find((ele) => ele.name === getName);
  //   // if(sameName){
  //   //   alert("todo already exists");
  //   // }else{
  //   //   setTodo([...getTodo, {name: getName, date: getDate}]);
  //   // }
  // }
  
  // const deleteTodo = (delName) => {
  //   // const removeItem = getTodo.filter((todoItem) => todoItem.name !== delName);
  //   // setTodo(removeItem);

  //   const deletItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       delName,
  //     }
  //   }
  //   dispatchTodoItems(deletItemAction);
  // }

  return (
    <TodoStoreContextProvider>
      <div className={styles.container}>
        <AppName appName={"Todo List"} />
        <AddTodo />
        <WelcomeMessage />
        <TodoList />
      </div>
    </TodoStoreContextProvider>
  )
}

export default App
