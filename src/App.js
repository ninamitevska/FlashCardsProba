import React, {useEffect, useState} from "react";
import FlashcardList from "./FlashcardList";
import fcData from "./FlashcardList";
// import FlashcardData from "./data/flashcards.json";
import LanguageData from "./data/languages.json"
import Flashcard from "./Flashcard"
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
    // const [flashcards] = useState(fcData)
    const [languages/*, setLanguagesnpm*/] = useState(LanguageData)


    const languageOptions = languages.map(language => {
        return <option value={language.id} key={language.id}>{language.name}</option>
    });

    const cardShuffler = (arr) => {
        return arr.sort( () => .5 - Math.random() );
    };

    // useEffect(() => {
    //     fetch("/flashcards").then(
    //         FlashcardData => FlashcardData.json()
    //     ).then(
    //         fcData => {
    //             setFlashcards(fcData)
    //             console.log(fcData)
    //         }
    //     )
    // },[])

  return (
      <>
          <Router>
              <Routes>
                  <Route path='/get_words' component={Flashcard}>
                  </Route>
              </Routes>
          </Router>
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
              {/*<button className="btn" onClick={cardShuffler(flashcards)} id="shuffle">Shuffle</button>*/}
          </div>
      </form>

      <div className="container">
        <FlashcardList/>
      </div>


      {/*<div>*/}
      {/*    {(typeof fcData.flashcards == 'undefined') ? (*/}
      {/*      <p>Loading...</p>*/}
      {/*    ) : (*/}
      {/*        fcData.flashcards.map((flashcard, i ) => (*/}
      {/*            <Flashcard key={i} flashcard={flashcard}></Flashcard>*/}
      {/*        ))*/}
      {/*    )}*/}
      {/*</div>*/}



    </>
  );
}

export default App;
