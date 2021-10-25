import React, {useEffect, useRef, useState} from "react";
import FlashcardList from "./FlashcardList";
import FlashcardData from "./data/flashcards.json";
import LanguageData from "./data/languages.json"
import Flashcard from "./Flashcard";
//import axios from "request";
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [flashcards,setFlashcards] = useState(FlashcardData)
  const [languages, setLanguages] = useState(LanguageData)

    const languageEl = useRef(LanguageData)
    const amountEl = useRef()

    const CardShuffler = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };


  useEffect(() =>{

        setLanguages(LanguageData)

  }, [])


  return (
      <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="language">Language that you know</label>
          <select id="language" ref={languageEl}>
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
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
          <div className="form-group">
              <button className="btn" onClick={CardShuffler(flashcards)}>Shuffle</button>
          </div>
      </form>

      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

/*   function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML= str
        return textArea.value
    }

    function handleSubmit(e) {
        e.preventDefault()
            axios
            .get(FlashcardData, {
                params: {
                    amount: amountEl.current.value,
                    language: languageEl.current.value
                }
            })
                .then(res => {
                    setFlashcards(res.data.results.map((questionItem, index) => {
                        const answer = decodeString(questionItem)
                        return {
                            id: `${index}-${Date.now()}`,
                            question: decodeString(questionItem.question),
                            answer: answer
                        }
                    }))
                })

  }
*/


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
