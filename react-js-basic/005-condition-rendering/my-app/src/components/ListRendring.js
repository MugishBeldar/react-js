import React from 'react'

function ListRendring() {
    const names = ['a', 'b', 'c']
    const nameList = names.map((ele, index) => <p key={index}>{ele}</p>)
    
  return (
    <div>
        <h2>ListRendring</h2>
        {nameList}
    </div>
  )
}

export default ListRendring