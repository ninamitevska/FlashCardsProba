import React, {useEffect, useState} from "react";
import FlashcardList from "./FlashcardList";
import Languages from "./Language";

const App = () => {

    return (
        <div className="App">
            <Languages/>
            <div className="container">
                <FlashcardList/>
            </div>
        </div>
    );
}

export default App;
