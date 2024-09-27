import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


export const useTodos = (initialState = []) => {
    
    

const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || [];
 }
    
 const [todos, dispatch] = useReducer(todoReducer, initialState, init)

 useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todos))

 }, [todos])

 const onTodoAdd = (todo) => {
    const action = {
        type: 'add',
        payload: todo
    }

    dispatch(action);
}


const onTodoDelete = (id) => {
    const action = {
        type: 'delete',
        payload: id
    }

    dispatch(action);
}


const onTodoToggle = (id) => {
    const action = {
        type: 'toggle',
        payload: id
    }

    dispatch(action);
}

  return {
    todos,
    todoCount: todos.length,
    todoDone:todos.filter(todo=>todo.done === false).length,
    onTodoAdd,
    onTodoDelete,
    onTodoToggle,
  }
}

