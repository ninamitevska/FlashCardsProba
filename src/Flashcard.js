import React, {useEffect, useRef, useState} from "react";
import './app.css'
import Button from 'react-bootstrap/Button';
import data from "bootstrap/js/src/dom/data"
import FlashcardData from "./data/flashcards.json"


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [color, setColor] = useState(false)
    //const [correct, setCorrect] = useState(false)

    const frontEl = useRef()
    const backEl = useRef()

    const handleClick = (c) => {
        setColor(c);
    }

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return(
        <div className={`card ${flip ? 'flip' : ''}`}
             style={{ height : height}}
            onClick={/*() => setCorrect(correct) && */() => setFlip(!flip)}>

            <div className={" front " + (color? "text-success": "text-danger")} ref={frontEl}>
                {flashcard.question}
            </div>

            <div className="back" ref={backEl}>
                {flashcard.answer}
                <Button onClick={()=>handleClick(true)}  className="btn-success" variant="success" >Correct</Button>
                <Button onClick={()=>handleClick(false)}  className="btn-danger" variant="danger" >Incorrect</Button>
            </div>

            {/* {flip ? flashcard.answer : flashcard.question} */}

        </div>
    );

};