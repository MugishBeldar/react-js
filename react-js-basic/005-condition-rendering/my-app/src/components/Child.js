import React from 'react'

const Child = (props) => {
    console.log("🚀 ~ file: Child.js:4 ~ Child ~ props:", props) 
  return (
    <div>
        <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default Child