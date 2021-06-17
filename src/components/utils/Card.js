import React from 'react'

export default function Card({ className, children, title, ...props }) {
    return (
        <div className={`card ${className}`} >
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}
