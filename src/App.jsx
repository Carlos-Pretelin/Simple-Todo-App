import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import '../src/styles/App.scss'

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
        return todos.filter( todo =>  todo.id !== action.payload.id )
    default:
        return todos
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
      <div className='wrapper'>
        <div className='instructions'>

          <h1>Simple React To-do list</h1>

          <p>Write your tasks in the box below and press Enter to create a To-do</p>

        </div>
        <form
        className='todo-form' 
        onSubmit={handleSumbit}>
          <input type="text" value={name} onChange={e => setName (e.target.value)} />
        </form>
        <div className='todo-wrapper'>
          {todos.map( todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
          })}
        </div>

        </div>
      
    </div>
  );
}

export default App;