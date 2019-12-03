import React, { Component } from 'react'
import EmoGlobal from './emotionalThings/EmoGlobal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      changeThis: 'Temp',
    }
  }
  render() {
    return (
      <>
        <EmoGlobal />
        <h1>Temporary</h1>
      </>
    )
  }
}

export default App
