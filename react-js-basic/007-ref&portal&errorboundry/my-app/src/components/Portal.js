import React from 'react'
import ReactDom from 'react-dom'
function Portal() {
    return ReactDom.createPortal(
        <div>
            <h1>Portal</h1>
            <h3>Inside Portal Root Div</h3>
        </div>,
        document.getElementById('portalRoot')
    )
}

export default Portal