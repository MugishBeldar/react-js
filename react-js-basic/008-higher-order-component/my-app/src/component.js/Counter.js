import React, { useState } from 'react'
// import UpdatedComponent from './WithCounter';
import WithCounter from './WithCounter';
function Counter({ count, countHandler, props}) {
    console.log("🚀 ~ file: Counter.js:5 ~ Counter ~ props:", props)
    
    return (
        <div>
            <button onClick={() => countHandler()}>{props.name} Clicked {count} times.</button>
            {/* <button onClick={()=>countHandler()}>{name} Clicked {count} times.</button> */}
        </div>
    )
}

// export default UpdatedComponent(Counter)
export default WithCounter(Counter,1)