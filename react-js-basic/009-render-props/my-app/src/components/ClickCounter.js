import React, { Component } from 'react'

export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // clickHandler = () => {
    //     this.setState(prevState=>{
    //         return {count: prevState.count+1}
    //     })
    // }
    render() {
        const {count, clickHandler} = this.props;
        return (
            <div>
                <h1>Click Counter</h1>
                <button onClick={()=>clickHandler()}>I am clicked {count} time</button>
            </div>
        )
    }
}

export default ClickCounter