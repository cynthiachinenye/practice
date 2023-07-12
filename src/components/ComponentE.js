import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
 class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF/>
        component E context = {this.context}
        
        </div>
    )
  }
}
ComponentE.contextType =UserContext

export default ComponentE