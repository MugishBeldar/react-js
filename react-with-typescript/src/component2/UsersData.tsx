import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Users } from '../types/User'

type ISTATE = Array<Users>

const UsersData: React.FC = () => {
  const [user, setUser] = React.useState<ISTATE | null>(null);
  const fetchData = async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  };
  const { isLoading, error } = useQuery('users', fetchData, {
    onSuccess: (data) => {
      setUser(data?.data)
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    // @ts-ignore
    return <div>Error: {error.message}</div>;
  }

  console.log(user)
  return (
    <>
      {
        user && user.map(post=>(
          <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{post.username}</p>
            <p>{post.email}</p>
            <p>{post.phone}</p>
            <p>{post.website}</p>
          </div>
        ))
      }
    </>
  )
}

export default UsersData