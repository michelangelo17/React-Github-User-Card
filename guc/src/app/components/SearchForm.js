import React, {Component} from 'react'
import { TextInput, Button } from '../emotionalThings/EmoTools'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      searchString: ''
    }
  }
  handleChange = e => {
    this.setState({searchString: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.submitStateUpdater(this.state.searchString)
    this.setState({searchString: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='search'>Search User</label>
      <TextInput name='search' onChange={this.handleChange} value={this.state.searchString} />
      <Button type='submit'>Search</Button>
      </form>
    )
  }
}

export default SearchForm