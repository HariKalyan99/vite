import React, { useContext } from 'react'
import { TodoStore } from '../../Store/TodoStore';

const WelcomeMessage = () => {

  const {getTodo} = useContext(TodoStore);
  const getTodoDataFromContext = getTodo;
  return (
    getTodoDataFromContext.length === 0 && <h1>Add your todos one by one</h1>
  )
}

export default WelcomeMessage