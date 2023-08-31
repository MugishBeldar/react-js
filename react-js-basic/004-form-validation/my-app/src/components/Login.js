import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("");
    const [intrest, setIntrest] = useState("MCU");
    const [tnc, setTnc] = useState(false);
    const getData =(e) => {
        console.log("🚀 ~ file: Login.js:6 ~ Login ~ name:", name)
        console.log("🚀 ~ file: Login.js:7 ~ Login ~ intrest:", intrest)
        console.log("🚀 ~ file: Login.js:8 ~ Login ~ tnc:", tnc)
        e.preventDefault();
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={getData}>
            <input type="text"  placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <select onChange={(e)=>setIntrest(e.target.value)}>
                <option>Select Option</option>
                <option>MCU</option>
                <option>DCU</option>
            </select>
        <input type="checkbox" onChange={(e)=>setTnc(true)} /> <span>Accept Terms And Condition.</span><br /><br />
        <button type='submit'>Submit</button>
        </form> <br />
    </div>
  )
}

export default Login