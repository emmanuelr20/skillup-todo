import React, {useState} from 'react'

export default function TodoItem({ todo, index }) {
    // TODO: add a todo-done class if todo.done is true

    const pageWidth = document.body.offsetWidth;
    const widthThreshold = 768;

    let itemClass = todo.done ? " todo-item todo-done": "todo-item";

    const [ showDesc , setShowDesc ] = useState(
        pageWidth > widthThreshold
    );

    const showDescription  = e => {
        e.preventDefault();
        if (pageWidth <= widthThreshold) {
            setShowDesc(!showDesc)
        } 
    }

    return (
        <div className={itemClass} >
            <div className="todo-heading" onClick={showDescription}>
                <div className="todo-index">
                    #{index} 
                </div>
                <div className="todo-title">
                    {todo.title} 
                </div>
                <div className="todo-priority">
                    {todo.priority} 
                </div>
            </div>
            {
                showDesc && (
                    <div className="todo-description">
                        {todo.description} 
                    </div>
                )
            }
        </div>
    )
}
