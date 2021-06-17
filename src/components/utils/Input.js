import React from 'react'

export default function Input({ className, label, ...props }) {
    return (
        <>
            {label && <label className={"form-label"}>{label}</label>}
            <input
                {...props}
                className={`form-input  ${className || ""}`}
            />
        </>
    )
}
