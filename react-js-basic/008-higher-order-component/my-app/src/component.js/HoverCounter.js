// import React, { useState } from 'react'
// import UpdatedComponent from './WithCounter';
import WithCounter from './WithCounter';

function HoverCounter({count, countHandler, props}) {
    // const [count,setCount] = useState(0);
    // const hoverHandler = () => {
    //     setCount(count+1);
    // }
  return (
    <div>
        <h2 onMouseOver={()=>countHandler()}>
            {props.name} Hovered {count} times.
        </h2>
    </div>
  )
}

// export default UpdatedComponent(HoverCounter)
export default WithCounter(HoverCounter,10)