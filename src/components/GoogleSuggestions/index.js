// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  replaceSuggestion = suggestion => {
    console.log(`clicked ${suggestion}`)
    this.setState(prevState => ({searchInput: suggestion}))
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each => 
      each.suggestion.toLowerCase().includes(searchInput)
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="suggestions-card-container">
          <div className="input-label">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon" alt="search icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="card-container">
            {searchResults.map(each => (
              <SuggestionItem
                suggestionsList={each}
                key={each.id}
                replaceSuggestion={this.replaceSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
