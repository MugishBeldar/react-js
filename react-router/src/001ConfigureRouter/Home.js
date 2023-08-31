import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate  = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        {/* 003 navigation programmatically */}
        <button onClick={()=>navigate('order-summary')}>Place Order</button>
    </div>
  )
}

export default Home