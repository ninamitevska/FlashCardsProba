import React, {useState} from "react";
import FlashcardList from "./FlashcardList";
import FlashcardData from "./data/flashcards.json";
import LanguageData from "./data/languages.json"

function App() {
    const [flashcards] = useState(FlashcardData)
    const [languages, setLanguages] = useState(LanguageData)

    const languageOptions = languages.map(language => {
        return <option value={language.id} key={language.id}>{language.name}</option>
    });

    const cardShuffler = (arr) => {
        return arr.sort( () => .5 - Math.random() );
    };

  return (
      <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="language">Language that you know</label>
          <select id="language">
            {languageOptions}
          </select>
        </div>
          <div className="form-group">
              <label htmlFor="language">Language that you want to learn</label>
              <select id="language">
                  {languageOptions}
              </select>
          </div>
        <div className="form-group">
          <label htmlFor="amount">Number of words</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10}/>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
          <div className="form-group">
              <button className="btn" onClick={cardShuffler(flashcards)} id="shuffle">Shuffle</button>
          </div>
      </form>

      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
