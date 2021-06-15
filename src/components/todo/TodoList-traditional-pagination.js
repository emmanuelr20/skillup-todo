import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, group, perPage = 10 }) {

    const lastPage = Math.ceil(todos.length / perPage);

    const [currTodos, setCurrTodos] = useState(todos);
    const [page, setPage] = useState(1);

    const goToPage = (page = 1) => {
        if (page < 1) return;
        if (page > lastPage) return;

        let start = (page - 1) * perPage;
        let end = page * perPage;

        setPage(page);
        setCurrTodos(todos.slice(start, end));
    }

    useEffect(() => {
        goToPage();
    }, [todos]);

    return (
        <div className="todo-list">
            {
                currTodos.map((todo, index) => <TodoItem todo={todo} index={index} key={group + index} />)
            }

            <div className="pagination">
                <button
                    className="pagination-btn btn"
                    type="button"
                    disabled={page <= 1}
                    onClick={() => goToPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="pagination-btn btn"
                    type="button"
                    disabled={page >= lastPage}
                    onClick={() => goToPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
