import React from "react";
import Flashcard from "./Flashcard";
import FlashcardData from "./data/flashcards.json"

export default function FlashcardList(){

    let flashCardsList =FlashcardData.map(flashcard => {
        return (<Flashcard flashcard={flashcard} key={flashcard.id}/>
        );
    });

    return(
        <div className="card-grid">
            {flashCardsList}
        </div>
    );
};