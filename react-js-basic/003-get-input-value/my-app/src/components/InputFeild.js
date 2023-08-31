import React, { useState } from 'react'

const InputFeild = () => {
    const [name, getName] = useState(null)
    const [print, printName] = useState(false)
    const [emptyFeild, doEmptyFeild] = useState(false)
    const getInput = (val) => {
        getName(val.target.value);
        doEmptyFeild(val);
    }
    const displayName = () => {
        printName(true);
        emptyFeild.target.value = '';
        doEmptyFeild(false)
    }

    return (
        <div>
            {
                (print && !emptyFeild) ? <h2>{name}</h2> : null
            }
            <input type="text" onChange={getInput}></input>
            <button onClick={() => displayName()}>Submit</button>
        </div>
    )
}

export default InputFeild