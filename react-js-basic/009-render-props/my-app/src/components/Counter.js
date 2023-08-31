import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <div>
                <h1>Inside Counter</h1>
                {this.props.children(this.state.count, this.clickHandler)}
            </div>
        )
    }
}

export default Counter