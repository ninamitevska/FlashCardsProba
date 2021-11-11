import React, {/*useEffect, useRef,*/ useState} from "react";
import './app.css'
import axios from 'axios';

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
    //const [height, setHeight] = useState('initial')
    //const [color, setColor] = useState(false)
    //let cardClass = color ? "front text-success" : "front text-danger";
    let flipClass = `card ${flip ? 'flip' : ''}`
    const [wordClick, setWordClicked] = useState()


    function get_words(question, correctWord) {
        axios.get(`http://localhost:5000/get_words`, {
            params: {
                word_clicked: question,
                correct_word: correctWord
            }
        }).then(res => setWordClicked(res.data))
    }

    const doSelect = (word) => {
        console.log(word)
    }
    const options = wordClick?.map(it =>
        (<div key={it[0]}>
            <input type="radio" onClick={() => doSelect(it[0])}/> {it[0]}

        </div>)
    )

    return (
        <>
            <div className={flipClass}
                 onClick={() => {
                     setFlip(!flip);
                     get_words(flashcard.question)
                 }}>
                <div className="front" /*ref={frontEl}*/>
                    {flashcard.question}
                </div>

                <div className="back" /*ref={backEl}*/>
                    {options}
                </div>
            </div>
        </>
    );
};