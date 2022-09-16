import React, { useReducer, useState } from 'react';
import Todo from './Todo';

 function reducer(todos, action){
   switch(action.type){

    case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.newTodoName)]
      
    case ACTIONS.TOGGLE_TODO:
        return todos.map( todo => {
            if(todo.id === action.payload.id){
                return { ...todo, complete: !todo.complete }
            }
            return todo
        })
    case ACTIONS.DELETE_TODO: 
        return todos.filter( todo => { todo.id !== action.payload.id })
   }
  }

 function newTodo(newTodoName){
    return {id: Date.now(), name:newTodoName, completed: false}
  }

 export const ACTIONS = {
   ADD_TODO: 'add-todo',
   TOGGLE_TODO: 'toggle-todo',
   DELETE_TODO: 'delete-todo'

 };


export function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')


  function handleSumbit(e){
    e.preventDefault()
    dispatch( {type: ACTIONS.ADD_TODO, payload: {newTodoName:name}} )
    setName('')
  }
 console.log(todos);
  return (
    <div className='App'>
      <form onSubmit={handleSumbit}>
        <input type="text" value={name} onChange={e => setName (e.target.value)} />
      </form>
      {todos.map( todo => {
       return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
      
    </div>
  );
}

export default App;