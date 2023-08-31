import React from 'react'

function Button({ incrementCount, children }) {
    console.log('inside button.js');
    return (
        <div>
            <button onClick={incrementCount}>{children}</button>
        </div>
    )
}

export default React.memo(Button)