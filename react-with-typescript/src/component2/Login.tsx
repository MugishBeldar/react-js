import React from 'react'
interface ISTATE {
  user: {
    email: string,
    password: string,
  }
}
const Login: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<ISTATE>({
    user: {
      email: '',
      password: '',
    }
  })
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      user: {
        ...prevUserInfo.user,
        [name]: value,
      },
    }));
  };
  return (
    <>
      <div className="container mt-5">
        <div className='w-50 card p-4'>
          <h1 className="mb-4">Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input name='email' onChange={changeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input name='password' onChange={changeHandler} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <p className="mt-3">{JSON.stringify(userInfo)}</p>
      </div>
    </>
  )
}

export default Login