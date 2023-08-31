import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(1);
    const addOne = () => setCount(count += 1);
    const minusOne = () => setCount(count -= 1);
    return (
        <div>
            <h1>
                Counter
            </h1>
            <h2>Conunt = {count}</h2>
            <button onClick={() => addOne()}>ADD ONE</button>
            <button onClick={() => minusOne()}>MINUS ONE</button>
        </div>
    )
}

export default Counter