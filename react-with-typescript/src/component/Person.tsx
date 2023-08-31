import React from 'react'
type personProps = {
    name:{
        first: string,
        last: string,
    }
}
function Person(props:personProps) {
  return (
    <>
      <h1>
        {props.name.first} {props.name.last}
      </h1>
    </>
  )
}

export default Person