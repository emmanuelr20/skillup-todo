import React from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, group }) {
    return (
    <div className="todo-list">
        <div className="todo-group">
            <h4>{group}</h4>
        </div>
        { 
            todos.map((todo, index) => <TodoItem todo={todo}/>)
        }
    </div>
    )
}
