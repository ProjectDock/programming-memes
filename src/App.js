import React from 'react';
import './App.css';
import MEMES from "./MEMES/MEMES";

function App() {
    return (
        <>
            <header>
                <p>Programming Memes</p>
            </header>

            <div className="site__content">
                <MEMES />
            </div>


        </>
    );
}

export default App;
