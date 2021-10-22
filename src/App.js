import React, {useEffect, useState} from "react";
import FlashcardList from "./FlashcardList";
import FlashcardData from "./data/flashcards.json";
import LanguageData from "./data/languages.json"
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [flashcards] = useState(FlashcardData)
  const [languages, setLanguages] = useState(LanguageData)

  useEffect(() =>{

        setLanguages(LanguageData)

  }, [])

  return (
      <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="language">Language that you know</label>
          <select id="language">
            {languages.map(language => {
              return <option value={language.id} key={language.id}>{language.name}</option>
            })}
          </select>
        </div>
          <div className="form-group">
              <label htmlFor="language">Language that you want to learn</label>
              <select id="language">
                  {languages.map(language => {
                      return <option value={language.id} key={language.id}>{language.name}</option>
                  })}
              </select>
          </div>
        <div className="form-group">
          <label htmlFor="amount">Number of words</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10}/>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>

      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}


/*function WarningBanner(props) {
  if (!props.correctWord) {
    return (
        <div className="wrongWord">Wrong word!</div>
    );
    return (
        <div className="correctWord">Correct word!</div>
    );
  }

  render(){
    return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
    );
  }*/


/*
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Hallo',
    answer: 'Здраво',
  },
  {
    id: 2,
    question: 'sein',
    answer: 'Сум',
  },
  {
    id: 3,
    question: 'haben',
    answer: 'Има',
  },
  {
    id: 4,
    question: 'kaufen',
    answer: 'Купува',
  }
] */


export default App;
