import React, { useState ,useEffect } from 'react'

function FirstUseefect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=> {
        console.info("useEffect run!!")
        document.title = `click ${count} times`
    },[count])
    const addCount = () => {
        setCount(count+1);
    }
    const nameHandler = (e) => {
      setName(e.target.value);
    }
  return (
    <div>
        <h3>FirstUseeffect</h3>
        <p>Count : {count} and Name: {name}</p>
        <input type='text' name='name' value={name} onChange={nameHandler} placeholder='Enter a name'/>
        <button onClick={addCount}>Click Me</button>
    </div>
  )
}

export default FirstUseefect