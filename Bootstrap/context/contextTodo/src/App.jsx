import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import TodoList from './components/TodoList'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import { TodoStore } from '../Store/TodoStore'


function App() {
  const [getTodo, setTodo] = useState([]);


  const addNewItem = (getName, getDate) => {
    const sameName = getTodo.find((ele) => ele.name === getName);
    if(sameName){
      alert("todo already exists");
    }else{
      setTodo([...getTodo, {name: getName, date: getDate}]);
    }
  }

  const deleteTodo = (delName) => {
    const removeItem = getTodo.filter((todoItem) => todoItem.name !== delName);
    setTodo(removeItem);
  }


  return (
    <TodoStore.Provider value={{getTodo: getTodo, handleTodoAdd: addNewItem, handleTodoDelete: deleteTodo}}>
      <div className={styles.container}>
        <AppName appName={"Todo List"} />
        <AddTodo />
        <WelcomeMessage />
        <TodoList />
      </div>
    </TodoStore.Provider>
  )
}

export default App
