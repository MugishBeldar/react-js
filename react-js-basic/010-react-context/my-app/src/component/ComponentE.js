import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentE extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (userName) => {
                            return <h1>{userName}</h1>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentE