import React from 'react'
import { CourseContext, UserContext } from '../../App'
function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    name => {
                        return (
                            <CourseContext.Consumer>
                                {couse => {
                                    return (
                                        <div>User context value is {name} and course context value is {couse}</div>
                                    )
                                }}
                            </CourseContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC