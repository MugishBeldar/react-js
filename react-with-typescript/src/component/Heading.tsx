import React from 'react'
type headingProps = {
  children: string,
}
function Heading(prop: headingProps) {
  return (
    <>
      <p>{prop.children}</p>
    </>
  )
}

export default Heading