import React,{useState} from 'react'
import './App.css';
import Form from './Form';
import Todos from './TodoList';

function Todo() {

    const [todoList, setTodoList] = useState([]);

  const [filter, setFilter] = useState("all");

  //  add todo

  const addTodo=(todoInput, todoDate)=>{
    const newTodoList = [...todoList, {
      status: false,
        todoText: todoInput,
        todoDate: todoDate,
        id: Math.random()
    }];
    setTodoList(newTodoList);
  }


  //  delete todo
  const deleteTodo = (todoid) => {
    const newTodos = [...todoList];
    const updatedTodo = newTodos.filter((item, key) => item.id !== todoid)
    setTodoList(updatedTodo);
    console.log(updatedTodo)
  }


  // all todo list

  const allTodoList=()=>{
    setFilter("all");
  }


  //  active todo list


  const activeTodoList = () => {
    setFilter("active");
  }

  //  completed todo list


  const completedTodoList = () => {
    setFilter("complete");
  }


  //  todo status change


   const todoStatus = (todoId) => {
    console.log(todoId);
    const newTodos = todoList.map(item=>{
      if (item.id==todoId) {
        return {...item, status : !item.status}
      }else{
        return item;
      }
    })
    setTodoList(newTodos);
  }


  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form
      addTodo={addTodo}
      />
      <div id="todolist">
        <ul>
          {todoList.filter(todoItem=>{
            if (filter==="all") {
              return todoItem;
            }
            else if(filter==="complete"){
              return todoItem.status === true;
            }
            else if(filter==="active"){
              return todoItem.status === false;
            }
          }).map((todo, id) => {
            return <Todos
              key={id}
              index={id}
              todos={todo}
              ondelete={deleteTodo}
              statusTodo={todoStatus}
            />
          })}
        </ul>
      </div>
      <div>
        <button id="sort" onClick={allTodoList}>All</button>
        <button id="sort" onClick={activeTodoList}>Active</button>
        <button id="sort" onClick={completedTodoList}>Completed</button>
      </div>
    </div>
  );
}

export default Todo
