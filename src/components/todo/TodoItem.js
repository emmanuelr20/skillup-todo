import React from 'react'

export default function TodoItem({ todo }) {
    return (
        <div className="todo-item">
            <div className="todo-title">
                {todo.title} 
            </div>
            <div className="todo-description">
                {todo.description} 
            </div>
        </div>
    )
}
