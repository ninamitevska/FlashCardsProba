import React, {useEffect, useRef, useState} from "react";
import './app.css'
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import axios from 'axios';


export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [color, setColor] = useState(false)
    let cardClass = color ? "front text-success" : "front text-danger";
    let flipClass = `card ${flip ? 'flip' : ''}`
    //const {word_clicked} = useParams()
    const [wordClick, setWordClicked] = useState()

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

    // useEffect(() => {
    //     (`/get_words`)
    //         .then(response => response.json())
    //         .then(wordClick=> setWordClicked(wordClick))
    // },[word_clicked])

    function get_words(question) {
        axios.get(`http://localhost:5000/get_words`, {
            params: {
                word_clicked: question
            }
        }).then(res => setWordClicked(res.data))
    }
    const doSelect = (word) =>{
        console.log(word)
    }
    const options = wordClick?.map(it =>
        (<div key={it[0]}>
            <input type="radio" onClick={()=>doSelect(it[0])}/> {it[0]}

        </div>)
    )

    return (
        <>
            <div className={flipClass}
                 style={{height: height}}
                 onClick={() => {
                     setFlip(!flip);
                     get_words(flashcard.question)
                 }}>
                <div className={cardClass} ref={frontEl}>
                    {flashcard.question}
                </div>

                <div className="back" ref={backEl}>
                    {options}
                </div>
            </div>
        </>
    );
};