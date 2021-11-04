import React, {useEffect, useRef, useState} from "react";
import './app.css'
import Button from 'react-bootstrap/Button';


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [color, setColor] = useState(false)
    let cardClass = color? "front text-success": "front text-danger";
    let flipClass = `card ${flip ? 'flip' : ''}`

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
        <>
        <div className={flipClass}
             style={{ height : height}}
            onClick={() => setFlip(!flip)}>
            <div className={cardClass} ref={frontEl}>
                {flashcard.question}
            </div>

            <div className="back" ref={backEl}>
                {flashcard.answer}
                <Button onClick={()=>handleClick(true)} className="btn-success" variant="success" >Correct</Button>
                <Button onClick={()=>handleClick(false)} className="btn-danger" variant="danger" >Incorrect</Button>
            </div>
        </div>
        </>
    );
};