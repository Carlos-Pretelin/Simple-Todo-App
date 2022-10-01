import React from "react";
import { ACTIONS } from './App.jsx';
import './styles/Todo.scss';

function Todo({ todo, dispatch }){
    return(
        <div className="todo-container">
            <span style={ {color: todo.complete ? '#AAA' :'#000'}}>
                {todo.name}
            </span>
            <div className="todo-buttons">
                <button onClick={ () => { dispatch( { type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}}
                >Toggle</button>
                <button onClick={ () => { dispatch( { type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}}
                >Delete</button>
            </div>
            
        </div>
    )
}
export default Todo ;