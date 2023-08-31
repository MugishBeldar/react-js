import React, { Component } from 'react'

export class RefsDemo extends Component {
    // constructor() {
    //     super();
    //     this.inputRef = React.createRef();
    // }
    // componentDidMount() {
    //     this.inputRef.current.focus()
    //     console.log(this.inputRef);
    // }
    // second approch
    constructor() {
        super();
        this.cbRef = null;
        this.setcbRef = (ele) => {
            this.cbRef = ele;
        }
    }
    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus();
        }
    }
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputRef}/> */}
        <input type='text' ref={this.setcbRef}/>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}

export default RefsDemo