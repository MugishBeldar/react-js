import React, { Component } from 'react'
import ComponentD from './ComponentD'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentD/>
      </div>
    )
  }
}

export default ComponentC