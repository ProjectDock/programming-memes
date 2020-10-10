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
            <footer>
                <div className="footer-content">
                    <p>
                        Copyright © {new Date().getFullYear()} ProjectDock. All Rights Reserved.
                    </p>
                </div>
            </footer>

        </>
    );
}

export default App;
