import React from 'react'

type ButtonProps = {
  handleclick: (event: React.MouseEvent<HTMLButtonElement>, count: number)=>void
  children: React.ReactNode
}
function Button(props: ButtonProps) {
  let count = 0;
  return (
    <>
      <button onClick={(event)=>props.handleclick(event,count++)}>Click</button>
    </>
  )
}

export default Button