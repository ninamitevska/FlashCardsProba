import React, {useEffect, useState} from "react";
import Flashcard from "./Flashcard";
// import FlashcardData from "./data/flashcards.json"
export default function FlashcardList(){

 const [fcData,setFlashcards] = useState([{}])

    useEffect(() => {
    fetch("/flashcards").then(
        FlashcardData => FlashcardData.json()
    ).then(
        fcData => {
            setFlashcards(fcData['flash_cards'])
            // fcData = fcData.pop()
            //console.log(fcData)

        }

    )
},[])
    let flashCardsList =fcData.map(flashcard => {
        return (<Flashcard flashcard={flashcard} key={flashcard.id}/>
        );
    });




    return(
        <div className="card-grid">
            {flashCardsList}
        </div>
    );
};