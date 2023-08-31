import React from 'react'

const RequireTech = ({data}) => {
    console.log(data)
    const techList = data.map((tech) => <li key={tech}>{tech}</li>)
    return techList
}

export default RequireTech