import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {
    const [state, setState] = useState("Parent")
    const greeting = (child) => {
        alert(`Hello ${state} from ${child}` )
    }
  return (
    <div>
        <Child  greetHandler={greeting}/>
    </div>
  )
}

export default Parent