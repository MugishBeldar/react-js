import React, { useState } from 'react'

function FourthHook() {
    const [name, setName] = useState([])

    const addName = () => {
        setName([...name, {
            id: name.length,
            value: Math.floor(Math.random() * 10) + 1,
        }])
    }

    // console.log(name);
    return (
        <div>
            <h3>FourthHook</h3>
            <ul>
                {
                    name.map(item=><li key={item.id}>value:{item.value}</li>)
                }
            </ul>
            <button onClick={addName}>Add Item</button>
        </div>
    )
}

export default FourthHook