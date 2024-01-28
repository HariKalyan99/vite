import { createContext } from "react"



export const TodoStore = createContext({
    getTodo: [], handleTodoAdd: () => {}, handleTodoDelete: () => {}
    // these are for the suggestions to pop in while you are referring to the todoStore
})

// or even the below will work

// export const TodoStore = createContext([])
