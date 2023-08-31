import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD() {
  const countcontext = useContext(CountContext)
  return (
    <div>ComponentD
      <button onClick={()=>countcontext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countcontext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countcontext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD