import './App.css';
import TodoList from './components/todo/TodoList'

function App() {

  const todos = [
    { title: "todo 1", description: "Lorem Ipsum dolor", done: false, priority: 0 },
    { title: "todo 2", description: "Lorem Ipsum dolor", done: false, priority: 1 },
    { title: "todo 3", description: "Lorem Ipsum dolor", done: true, priority: 1 },
    { title: "todo 4", description: "Lorem Ipsum dolor", done: true, priority: 1 },
    { title: "todo 5", description: "Lorem Ipsum dolor", done: false, priority: 0 },
    { title: "todo 6", description: "Lorem Ipsum dolor", done: true, priority: 0 },
  ];

  const all = todos;
  const done = todos.filter(todo => todo.done);
  const pending =  todos.filter(todo => !todo.done);

  return (
    <div className="App">
      <h1>Todos </h1>
      <hr />
      <hr />
      <TodoList group="All task" todos={all} />
      <hr />
      <TodoList group="Done task" todos={done} />
      <hr />
      <TodoList group="Pending task" todos={pending} />
    </div>
  );
}

export default App;
