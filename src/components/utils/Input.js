import React from 'react'

export default function Input({ className, label, error, ...props }) {
    return (
        <>
            {label && <label className={"form-label"}>{label}</label>}
            <input
                {...props}
                className={`form-input  ${className || ""}`}
            />
            {error && <div style={{ color: "red" }}><small>{error}</small></div>}
        </>
    )
}
