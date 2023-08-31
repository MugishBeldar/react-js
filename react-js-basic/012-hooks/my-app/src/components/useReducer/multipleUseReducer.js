/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable default-case */
import React, { useReducer } from 'react'

const initialState = 0; // initial state value is count value when program is run 
const reducer = (state, action) => {
    // always return new state 
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function MultipleUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState) // return array which have two value count and dispatch method count is value and dispatch mehtod switch case operation
    const [statetwo, dispatchtwo] = useReducer(reducer, initialState) // return array which have two value count and dispatch method count is value and dispatch mehtod switch case operation

    return (
        <div>
                <h3>Multiple useReducer hook</h3>
            <div>
                <p>Count: {state}</p>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
            <div>
                <p>Count: {statetwo}</p>
                <button onClick={() => dispatchtwo('increment')}>Increment</button>
                <button onClick={() => dispatchtwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchtwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default MultipleUseReducer