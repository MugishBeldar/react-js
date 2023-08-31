import React from 'react'

function Title() {
    console.log("inside title.js");
    return (
        <div>
            <h2>use callback hook</h2>
        </div>
    )
}

export default React.memo(Title)