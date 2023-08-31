import React, { useState } from 'react'

// state are mutable
const Message = () => {
    // const [value, setValue] = useState(1);
    const [message, setValue] = useState("Welcom Visitores");
    const changeMsg = () => setValue("Thanks for subscribe.")

    // change count  --> make new component for named counter
    // let [count, setCount] = useState(1);
    // const addOne = () => setCount(count+=1);
    // const minusOne = () => setCount(count-=1);

    return (
        <div>
            <div>
                <h1>{message}</h1>
                <button onClick={() => changeMsg()}>subscribe</button>
            </div>
            {/* <div>
                <h1>Conunt = {count}</h1>
                <button onClick={() => addOne()}>ADD ONE</button>
                <button onClick={() => minusOne()}>MINUS ONE</button>
            </div> */}
        </div>
    )
}

export default Message