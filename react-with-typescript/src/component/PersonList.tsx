import React from 'react'
import { personListProps } from './PersonList.types'
import { Link } from 'react-router-dom'
// type personListProps = {
//     nameList : {
//         first: string,
//         last: string,
//     }[]
// }
function PersonList(props: personListProps) {
  return (
    <>
      {
        props.nameList.map((person,index) => <div key={index}>
          <h1>{person.first} {person.last}</h1>
        </div>)
      }
      <Link to='/userdata'> Get User Data</Link>
    </>
  )
}

export default PersonList