import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentF() {
  const countcontext = useContext(CountContext)
  return (
    <div>ComponentF
      <button onClick={()=>countcontext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countcontext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countcontext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF