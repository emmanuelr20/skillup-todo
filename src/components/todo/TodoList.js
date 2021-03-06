import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, group, perPage = 10 }) {

    const lastPage = Math.ceil(todos.length / perPage);

    const [currTodos, setCurrTodos] = useState(todos);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const goToPage = (page = 1) => {
        if (page < 1) return;
        if (page > lastPage) return;
        let end = page * perPage;
        setPage(page);
        setCurrTodos(todos.slice(0, end));
    }

    useEffect(() => {
        goToPage();
    }, [todos]);

    const loadNextPage = () => {
        if (loading) return;
        setLoading(true);


        const currentPostion = window.pageYOffset + window.innerHeight;
        const pageLength = document.body.scrollHeight;

        if (pageLength <= currentPostion) {
            goToPage(page + 1);

            console.log(page)
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll',)
    }, [])

    return (
        <div className="todo-list">
            {
                currTodos.map((todo, index) => <TodoItem todo={todo} index={index} key={group + index} />)
            }
        </div>
    )
}
