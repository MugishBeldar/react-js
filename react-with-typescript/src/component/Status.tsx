import React from 'react'
type StatusProps = {
  status: 'Loading' | 'Error' | 'Success'
}
function Status(props: StatusProps) {
  return (
    <>
      {props.status === "Loading"? <h1>Loading...</h1> : props.status === 'Error' ? <h1>Error</h1>:<h1>Success</h1>}
    </>
  )
}

export default Status