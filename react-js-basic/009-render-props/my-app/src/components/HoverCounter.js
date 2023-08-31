import React, { Component } from 'react'

export class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // clickHandler = () => {
    //      this.setState(prevState=>{
    //         return {count: prevState.count+1}
    //      })
    // }
  render() {
    const {count, clickHandler} = this.props
    return (
      <div>
        <h1 onMouseOver={()=>clickHandler()}>Hover Counter {count} times.</h1>

      </div>
    )
  }
}

export default HoverCounter