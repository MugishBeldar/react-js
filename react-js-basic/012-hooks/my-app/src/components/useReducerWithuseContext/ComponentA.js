import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentA() {
  const countcontext = useContext(CountContext)
  return (
    <div>ComponentA
      <button onClick={()=>countcontext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countcontext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countcontext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA