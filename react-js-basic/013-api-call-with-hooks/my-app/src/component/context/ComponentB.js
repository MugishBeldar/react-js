import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { UserContext, CourseContext } from '../../App'
function ComponentB() {
    const name = useContext(UserContext);
    const courseName = useContext(CourseContext);
    return (
        <div>
            <p>----------{name}----------{courseName}----------</p>
            <ComponentC />
        </div>
    )
}

export default ComponentB