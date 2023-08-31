import React from 'react'
type OscarProps = {
  children: React.ReactNode,
}
function Oscar(props: OscarProps) {
  return (
    <>
      <h1>{props.children}</h1>
    </>
  )
}

export default Oscar