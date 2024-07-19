// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, replaceSuggestion} = props
  const {suggestion, id} = suggestionsList
  const replace = () => {
    replaceSuggestion(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={replace}
      />
    </li>
  )
}

export default SuggestionItem
