/* eslint-disable no-unused-vars */
import {Component} from 'react'
import LanguageItem from '../languageItems'
import ButtonContainer from './styledComponents'
import './index.css'

class Greetings extends Component {
  state = {selectedLanguage: 'English'}

  onClickEvent = event => {
    const {selectedLanguage} = this.state
    this.setState({selectedLanguage: event.target.value})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {selectedLanguage} = this.state
    const filterLanguageGreetingsList = languageGreetingsList.filter(
      each => each.buttonText === selectedLanguage,
    )
    return (
      <div className="container">
        <h1>Multilingual Greetings</h1>
        <div>
          <ButtonContainer onClick={this.onClickEvent} value="English">
            English
          </ButtonContainer>
          <ButtonContainer onClick={this.onClickEvent} value="Tamil">
            Tamil
          </ButtonContainer>
          <ButtonContainer onClick={this.onClickEvent} value="Telugu">
            Telugu
          </ButtonContainer>
        </div>
        <ul className="unOrder">
          {filterLanguageGreetingsList.map(eachItem => (
            <LanguageItem key={eachItem.id} languageList={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Greetings
