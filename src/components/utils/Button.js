import React from 'react'
<Button><i></i> dss</Button>

export default function Button(props) {
    let {size, action, icon, cssClass, children} = props;

    action = action ? `btn-${action}`: "";
    size = size ? `btn-size-${size}`: "";

    return (
        <button
            {...props}
            className={`btn  ${action} ${size} ${cssClass || ""}`} 
        >
            {children}
            { icon ? <i className={`fa fa-${icon}`}></i>: "" } 
        </button>
    )
}
