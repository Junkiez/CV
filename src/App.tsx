import React, {useEffect, useState} from 'react';
import './App.css';
import './Stylesheets/Glitch.css'
import './Components/Loading'
import Loading from "./Components/Loading";
import Frame from "./Components/Frame";
import avatar from "./Resourses/avatar.png";
import Clock from "./Components/Clock";
import Blocks from "./Components/Blocks";
import Tessaract from "./Components/Tessaract";
import Drawer from "./Components/Drawer"
import "./AppGrid.css";
import Draw from "./Scripts/Draw"
import Separator from "./Components/Separator";
import Technologies from "./Components/Technologies";
import Pad from './Components/Pad'
import Radar from "./Components/Radar"
import Stepper from "./Components/Stepper"
import Tags from "./Components/Tags"

function App() {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const onPageLoad = () => {
            const timeoutLoading = window.setTimeout(() => { setLoad(false); window.clearTimeout(timeoutLoading);}, 1000);
        };
        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    return (
        <div className="App container">
            <Loading display={load} header="Loading" message="Loading..."/>
            <header className="flex-row">
                <Drawer name={"Kaze"}/>
                <div className="container">
                    <h1 className="glitch_light">Curriculum vitae ⁘ ⌨</h1>
                    <p id="title-description">
                        <h2 id="subtitle">Fullstack developer</h2>
                        Lorem Ipsum is Lorem Ipsum, aute iri elementum. Lorem Ipsum is aute iri elementum. Lorem Ipsum
                        is also known as "The Lorem Ipsum", meaning Lorem Ipsum
                    </p>
                </div>
            </header>
            <Separator title="Skills" />
            <main>
                <span>Skills</span>
                <article className="flex-row">
                    <Radar/>
                    <Technologies/>
                </article>
                
            </main>
            <footer className="flex-row">
                <Tessaract/>
                <a href="https://t.me/KAZE_F"><img class="icon" src="src/telegram.png" alt="telegram icon">&ensp;Telegram</a>
                <a href="mailto:<KAZE>photoartcode@gmail.com?subject="><img class="icon" src="src/gmail.png" alt="gmail icon">&ensp;Email</a>
                <a href="https://github.com/Junkiez"><img class="icon" src="src/github-sign.png" alt="github icon">&ensp;GitHub</a>
            </footer>
        </div>
    );
}

export default App;
