/* eslint-disable default-case */
import React, { useReducer } from 'react'

const initialState = 0; // initial state value is count value when program is run 
const reducer = (state, action) => {
    // always return new state 
    switch(action) {
        case 'increment' :
            return state+1;
        case 'decrement' :
            return state-1;
        case 'reset' :
            return initialState;
        default :
            return state;
    }
}

function CounterOne() {
    const [state, dispatch] = useReducer(reducer, initialState) // return array which have two value count and dispatch method count is value and dispatch mehtod switch case operation

    return (
        <div>
            <h3>CounterOne useReducer hook</h3>
            <p>Count: {state}</p>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne