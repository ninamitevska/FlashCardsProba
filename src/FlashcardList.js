import React, {useState} from "react";
import Flashcard from "./Flashcard";
import FlashcardData from "./data/flashcards.json"

export default function FlashcardList({flashcards}){

    let flashCardsList =FlashcardData.map(flashcard => {
        return (<Flashcard flashcard={flashcard} key={flashcard.id}/>
        );
    });

    return(
        <div className="card-grid">
            {flashCardsList}
        </div>
    );

    /*    const [flashcard, setCards] = useState(FlashcardData.slice(0,100));
    const [pageNumber, setPageNumber] = useState(0)
    const flashcardsPerPage = 24
    const pagesVisited = pageNumber * flashcardsPerPage

    const displayCards = flashcards
        .slice(pagesVisited, pagesVisited + flashcardsPerPage)
        .map(flashcard)
*/




};