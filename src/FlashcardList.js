import React from "react";
import Flashcard from "./Flashcard";
import FlashcardData from "./data/flashcards.json"

export default function FlashcardList({ flashcards }){

    return(
        <div className="card-grid">
            {FlashcardData.map(flashcard => {
                return (<Flashcard flashcard={flashcard} key={flashcard.id}/>
                );
            })}
        </div>
    );
};