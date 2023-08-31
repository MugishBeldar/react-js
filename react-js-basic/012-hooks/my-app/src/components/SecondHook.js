import React from 'react'

// usestate with previous state
function SecondHook() {
    const initialCount = 0
    const [count, setCount] = React.useState(initialCount);
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const initial = () => {
        setCount(initialCount)
    }
    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount)=>prevCount+1)
        }
    }
  return (
    <div>
        <h3>SecondHook</h3>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={initial}>Initialcount</button>
        <button onClick={incrementByFive}>increment 5</button>

    </div>
  )
}

export default SecondHook