import React from 'react'

const WelcomeMessage = ({todoItems}) => {
  return (todoItems.length === 0 && <h1>ADD YOUR TODOS</h1>)
}

export default WelcomeMessage