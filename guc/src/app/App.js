import React, { Component } from 'react'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { H1, H2, FlexContainer } from './emotionalThings/EmoTools'
import SearchForm from './components/SearchForm'
import FollowersList from './components/renderData/FollowersList'
import Axios from 'axios'

class App extends Component {
  state = {
    currentUser: 'michelangelo17',
    followersArray: [],
  }
  componentDidMount() {
    const initialFollowersArray = []
    Axios.get(`https://api.github.com/users/${this.state.currentUser}`).then(
      res =>
        Axios.get(`${res.data.followers_url}`).then(res => {
          res.data.map(follower =>
            Axios.get(follower.url).then(res => {
              initialFollowersArray.push(res.data)
              this.setState({ followersArray: initialFollowersArray })
            })
          )
        })
    ).catch(err => console.log(err))
  }
  componentDidUpdate(ign, prevState) {
    const newFollowersArray = []
    prevState.currentUser !== this.state.currentUser &&
      Axios.get(`https://api.github.com/users/${this.state.currentUser}`).then(
        res =>
          Axios.get(`${res.data.followers_url}`).then(res => {
            res.data.map(follower =>
              Axios.get(follower.url).then(res => {
                newFollowersArray.push(res.data)
                this.setState({ followersArray: newFollowersArray })
              })
            )
          })
      ).catch(err => {
        this.setState({currentUser: prevState.currentUser})
        alert(` ${err}, Please check that the username is typed correctly!`)})
  }
  submitStateUpdater = input => {
    this.setState({
      currentUser: input,
    })
  }

  render() {
    return (
      <>
        <EmoGlobal />
        <FlexContainer fdc aic>
        <H1 m='20px'>
          GitHub Followers
        </H1>
        <SearchForm submitStateUpdater={this.submitStateUpdater} />
        {this.state.currentUser !== '' && (
          <H2 c m='15px'>
            {this.state.currentUser}'s Followers List
          </H2>
        )}
        <FollowersList followersArray={this.state.followersArray} />
        </FlexContainer>
      </>
    )
  }
}

export default App
