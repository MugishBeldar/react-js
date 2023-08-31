import React from 'react'

function Count({ text, count }) {
    console.log("inside count.js");
    return (
        <div>{text} : {count}</div>
    )
}

export default React.memo(Count)