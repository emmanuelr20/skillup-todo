import React from 'react'

export default function Modal({
    title,
    children,
    close,
    closeText,
    action,
    actionText,
    loading
}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-title">{title || "Modal"}</span>
                </div>
                <div className="modal-body">
                    {children || "Proin faucibus arcu quis ante. Nullam dictum felis eu pede mollis pretium. Nunc interdum lacus sit amet orci. Praesent ac massa at ligula laoreet iaculis."}
                </div>
                <div className="modal-footer">
                    <button 
                        className="btn" 
                        type="button" 
                        disabled={loading} 
                        onClick={action}>{loading ? "loading..." : (actionText || "Save")}
                    </button>
                    <button 
                        className="btn" 
                        type="button" 
                        disabled={loading}
                        onClick={close} >{closeText || "Cancel"}
                    </button>
                </div>
            </div>
        </div>
    )
}
