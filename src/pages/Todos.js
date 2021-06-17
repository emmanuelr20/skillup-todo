import React, { useState, useEffect } from 'react';
import TodoLoader from '../components/loaders/TodoLoader';
import TodoList from '../components/todo/TodoList';

export default function Todos({ allTodos, loading }) {

    //currently showing todos
    const [todos, setTodos] = useState(null);

    // view name
    const [currView, setCurrView] = useState("all");

    //search
    const [search, setSearch] = useState("");


    const setView = (view, search) => {

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

        if (search) {
            todos = todos.filter(todo =>
                todo.title.toLowerCase().includes(search.toLowerCase()) ||
                todo.description.toLowerCase().includes(search.toLowerCase())
            )
        }

        //set the finally filtered list to the current viewed list
        setTodos(todos);
        setCurrView(view);

    }

    useEffect(() => {
        setView(currView, search)
    },
        //Dependency (what changes should trigger a rerun)
        // eslint-disable-next-line
        [search, currView, allTodos]
    )

    return (
        <div className="container">
            <div className="heading-btn-wrapper">
                {/* approach 1 using tenary operator to render */}
                {currView === "all"
                    ? <button className="active" onClick={() => { setCurrView("all") }}>All</button>
                    : <button className="" onClick={() => setCurrView("all")}>All</button>
                }

                {/* approach 2 using class */}
                <button className={currView === "done" ? "active" : ""} onClick={() => setCurrView("done")}>Done</button>

                {/* approach 3 using conditionals */}
                {currView === "pending" && <button className="active" onClick={() => setCurrView("pending")}>Pending</button>}
                {currView !== "pending" && <button className="" onClick={() => setCurrView("pending")}>Pending</button>}
            </div>

            <input type="text" className="input" value={search} onChange={e => setSearch(e.target.value)} />

            {/*todos = null or undefined and if todos = [] */}
            {/** && = and  || = or */}
            {
                loading ? <TodoLoader /> :
                    (
                        todos && todos.length
                            ? <TodoList todos={todos} group={currView} />
                            : <h1>No todos avaliable</h1>
                    )
            }
        </div>
    )
}
