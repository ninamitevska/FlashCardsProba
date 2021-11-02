import React, {Component, useEffect, useRef, useState} from "react";
import './app.css'
import Button from 'react-bootstrap/Button';
import FlashcardData from "./data/flashcards.json";


export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [color, setColor] = useState(false)
    const [count, setCount] = useState(0);
    const [correct,setCorrect] = useState(false);
    //const [correct, setCorrect] = useState(false)

    const frontEl = useRef()
    const backEl = useRef()


    /*const handleRadio = event =>{
        setCorrect(!event)
        //console.log(event.target.value)
    }*/

    const handleClick = (c) => {
        setColor(c);
    }

    /*   export const increment = () =>{
           this.setState({count: this.state.count + 1})
       }
   */

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
        <div className={`card ${flip ? 'flip' : ''}`}
             style={{ height : height}}
            onClick={/*() => setCorrect(correct) && */() => setFlip(!flip)}>
            <div className={" front " + (color ? "text-success" : "text-danger")} ref={frontEl}>
                {flashcard.question}
            </div>

            <div className="back" ref={backEl}>
                {flashcard.answer}
                <Button onClick={()=>handleClick(true)} className="btn-success" variant="success" >Correct</Button>
                <Button onClick={()=>handleClick(false)} className="btn-danger" variant="danger" >Incorrect</Button>


                {/* {FlashcardData.map(result=>(
                        <div>
                    <input type="radio" max="4" value={result} name="radiovalues" onChange={(e)=> setCorrect(e.target.value)}/>
                    <b>{flashcard.answer}</b>
                        </div> ))}
                    <Button onClick={()=>handleClick(true)}>Submit</Button>*/}
            </div>


                    {/*<h2 style={{color:"green"}}>{correct}</h2>*/}

                {/*    <input  type="radio" value="option2"/> Option 2 */}

                {/* {flashcard.answer}*/}
                {/* <Button onClick={()=>{handleClick(true); setCount(count + 1)}} className="btn-success" variant="success" >Correct</Button> */}
                {/* <Button onClick={()=>handleClick(false)} className="btn-danger" variant="danger" >Incorrect</Button> */}

            {/* {flip ? flashcard.answer : flashcard.question} */}
            {/*<h2>{this.state.count}</h2>*/}
            {/*<p>Correct words: {count}</p>*/}

        </div>

        </>
    );

};