import React, {Component} from 'react'
import { TextInput, Button, Label, FlexForm, FlexContainer } from '../emotionalThings/EmoTools'

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
      <FlexForm fdc aic onSubmit={this.handleSubmit}>
      <Label m='1%' htmlFor='search'>Search User</Label>
      <FlexContainer>
      <TextInput name='search' onChange={this.handleChange} value={this.state.searchString} />
      <Button type='submit'>Search</Button>
      </FlexContainer>
      </FlexForm>
    )
  }
}

export default SearchForm