import React, { Component } from 'react'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { H1, H2 } from './emotionalThings/EmoTools'
import getUserFollowers from './apis/getUserFollowers'
import SearchForm from './components/SearchForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      followerArray: [],
    }
  }
  submitStateUpdater = input => {
    this.setState({
      currentUser: input,
      followerArray: getUserFollowers(input),
    })
  }
  render() {
    return (
      <>
        <EmoGlobal />
        <H1 c m='5%'>
          GitHub Friends
        </H1>
        <H2 c m='3%'>
          Find a users followed list on GitHub
        </H2>
        <SearchForm submitStateUpdater={this.submitStateUpdater} />
      </>
    )
  }
}

export default App
