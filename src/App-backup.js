import React, { useState, useEffect } from 'react'
import './App.css';
import TodoList from './components/todo/TodoList';
import CreateTodo from './components/todo/Modals/CreateTodo';
import Button from './components/utils/Button'; 
import TodoLoader from './components/loaders/TodoLoader';
import config from './config';

function App() { 
  // todos;
  const [allTodos, setAllTodos] = useState(null);

  //currently showing todos
  const [todos, setTodos] = useState(null);
  
  // view name
  const [currView, setCurrView] = useState("all");

  //search
  const [search, setSearch] = useState("");

  //todoLoading
  const [todoLoading, setTodoLoading] = useState(true);

  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const setView = (view, search) => {
    console.log(search);
    // if allTodos is null default and empty array
    let todos = allTodos || [];
    switch (view) {
      case "pending": 
        todos = todos.filter(todo => !todo.done);
        break;
      case "done":
        todos = todos.filter(todo => todo.done);
        break;
      default:
        view = "all";
        break;
    }

    // if(view === "pending") {
    //   todos = todos.filter(todo => !todo.done);
    // } else if(view === "done") {
    //   todos = todos.filter(todo => todo.done);
    // } else {
    //   view = "all";
    // }

    // at this point todos has been filter by view

    //search filter
    if(search) {
      todos = todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    }
    
    //set the finally filtered list to the current viewed list
    setTodos(todos);
    setCurrView(view);
  }

  //loads
  useEffect(() => { 
    fetch( `${config.baseUrl}todo` )
    .then(res => res.json())
    .then(res => {
      setTodos(res);
      setAllTodos(res);
      setTodoLoading(false);
    })
    .catch(err => {
      setTodoLoading(false);
    })
    ;
  }, 
  // since this dependency is empty it will never be rerun 
  []
  )

  // useEffect(() => {
  //   setView(currView, search)
  // }, 
  //   //Dependency (what changes should trigger a rerun)
  //   // eslint-disable-next-line
  //   [search, currView, allTodos]
  // )

  const addTodo = (todo) => {
    setAllTodos([todo, ...allTodos]);
  }

  return (
    <div className="App">
      
      <div id="main-header">
        <div className="container main-nav">
          <h1>Todos </h1>
          <Button onClick={() => setShowCreateModal(true)}> Add Todo </Button>
        </div>
      </div>
      { showCreateModal && <CreateTodo 
        show={setShowCreateModal}
        addTodo={addTodo}
      />}
      <div className="container">
        <div className="heading-btn-wrapper">
          {/* approach 1 using tenary operator to render */}
          {currView === "all"
            ? <button className="active" onClick={() => { setView("all", search) }}>All</button>
            : <button className="" onClick={() => setView("all", search)}>All</button>
          }

          {/* approach 2 using class */}
          <button className={currView === "done" ? "active" : ""} onClick={() => setView("done", search)}>Done</button>

          {/* approach 3 using conditionals */}
          {currView === "pending" && <button className="active" onClick={() => setView("pending", search)}>Pending</button>}
          {currView !== "pending" && <button className="" onClick={() => setView("pending", search)}>Pending</button>}
        </div>

        <input type="text" className="input" onChange={e => setView(currView, e.target.value)}/>

        {/*todos = null or undefined and if todos = [] */}
        {/** && = and  || = or */}
        { 
          todoLoading ? <TodoLoader/>:
          (
            todos && todos.length 
            ? <TodoList todos={todos} group={currView} />
            : <h1>No todos avaliable</h1>
          )
        }
      </div>
    </div>
  );
}

export default App;
