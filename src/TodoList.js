import React from 'react'

function Todos(props) {
    
    return (
        <>
            <li>
                <input type="checkbox" id={props.index} onChange={()=>{props.statusTodo(props.todos.id)}} checked={props.todos.status}/>
                <button id={props.index} className="delete" onClick={()=>{props.ondelete(props.todos.id)}}> Delete</button>
                <span className="date">{props.todos.todoDate}</span>
                <span className="todoText" style={{textDecoration: props.todos.status? "line-through" :  "", color: props.todos.status?"grey":""}}>{props.todos.todoText}</span>
              </li>
        </>
    )
}

export default Todos;
