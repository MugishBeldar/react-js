import React, { Component } from 'react'

export class RegCom extends React.PureComponent {
    constructor() {
        super();
        this.state ={
            count:1,
        }
    }
  render() {
    console.log("!!!!!!!!!!!!!!!!!!!!!🚀 ~ file: RegCom.js:11 ~ RegCom ~ render ~ render:")
    return (
      <div>
        <h1>Regular components {this.state.count}</h1>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}

        {/* it is also update on line no 18 but value is same not change.. */}
        <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button>
      </div>
    )
  }
}

export default RegCom