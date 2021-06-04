import React from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, group }) {
    return (
        <div className="todo-list">
            { 
                todos.map((todo, index) => <TodoItem todo={todo} index={index} key={group + index}/>)
            }
        </div>
    )
}
