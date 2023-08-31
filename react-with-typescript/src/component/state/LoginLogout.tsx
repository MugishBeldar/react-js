import React, { useState } from 'react'

function LoginLogout() {
  const [logedIn, setLogedIn] = useState(false);
  const loginHandler = () => {setLogedIn(true)}
  const logoutHandler = () => {setLogedIn(false)}
  return (
    <>
      <button onClick={()=>loginHandler()}>Login</button>
      <button onClick={()=>logoutHandler()}>Logout</button>
      <div>User {logedIn?'loged in':'loged out'}</div>
    </>
  )
}

export default LoginLogout