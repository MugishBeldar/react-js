import React, { useState } from 'react'
type Author = {
  name: string,
  email: string
}
function User() {
  const [user, setUser] = useState<Author | null>(null)
  const Logout = ()=>{
    setUser(null);
  }
  const Login = ()=>{
    setUser(
      {
        name:'jaymeen',
        email:'jaymeen@gmail.com',
      }
    )
  }
  return (
    <>
      <div>
        <button onClick={Login}>Login</button>
        <button onClick={Logout}>LogOut</button>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
      </div>
    </>
  )
}

export default User