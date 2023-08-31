import React, { useReducer } from 'react'

const initialState = {
    firstCounterState: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounterState: state.firstCounterState + action.value }
        case 'decrement':
            return { firstCounterState: state.firstCounterState - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterOneUsingOnject() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3>CounterOneUsingObject useReducer Hook</h3>
            <p>Count: {count.firstCounterState}</p>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterOneUsingOnject