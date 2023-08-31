import React from 'react'

function FirstHook() {
    const [count, setCount] = React.useState(0);
    const clickHandler = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h3>FirstHook</h3>
        <button onClick={clickHandler}>count {count}</button>
    </div>
  )
}

export default FirstHook