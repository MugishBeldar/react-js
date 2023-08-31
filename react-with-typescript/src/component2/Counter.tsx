import React, { useState } from 'react'
interface PROPS {
  name: string
}
interface ICOUNT {
  count: number,
}
const Counter: React.FC<PROPS> = ({ name }) => {
  let [countState, setCountState] = useState<ICOUNT>({ count: 0 })

  const increament = (): void => {
    const newCount = countState.count + 1;
    setCountState({ count: newCount });
  }
  const decreament = (): void => {
    const newCount = countState.count - 1;
    newCount < 0 ?
      setCountState({ count: 0 }) :
      setCountState({ count: newCount });
  }
  return (
    <div className='container-fluid ms-2 '>
      <h1>{name}</h1>
      <h1 className='ms-2'>{countState.count}</h1>
      <button className="ms-2 bg-success ps-4 pe-4 text-white border-1" onClick={() => increament()}>Inc</button>
      <button className="ms-2 bg-danger ps-4 pe-4 text-white border-1" onClick={() => decreament()}>Inc</button>
    </div>
  )
}

export default Counter;