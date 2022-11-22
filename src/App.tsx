import React, {useEffect, useState} from 'react';
import Technologies from "./Components/Technologies/Technologies";
import Separator from "./Components/Separator/Separator";
import Tessaract from "./Components/Tessaract/Tessaract";
import Stepper from "./Components/Stepper/Stepper";
import Loading from "./Components/Loading/Loading";
import Drawer from "./Components/Drawer/Drawer";
import Clock from "./Components/Clock/Clock";
import Radar from "./Components/Radar/Radar";
import Sketch from "./Components/Sketch";
import './Components/Loading/Loading';
import "./Stylesheets/AppGrid.css";
import './Stylesheets/Glitch.css'
import './Stylesheets/App.css';
import Packman from "./Components/Packman";

const technologies = [
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "alt": "react",
        "name": "React",
        "value": "40"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "alt": "js",
        "name": "JS",
        "value": "65"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        "alt": "go",
        "name": "Go",
        "value": "35"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
        "alt": "redis",
        "name": "Redis",
        "value": "25"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "alt": "github",
        "name": "Github",
        "value": "50"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "alt": "css3",
        "name": "CSS",
        "value": "75"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
        "alt": "php",
        "name": "PHP",
        "value": "35"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg",
        "alt": "vue",
        "name": "VUE",
        "value": "60"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        "alt": "ts",
        "name": "TS",
        "value": "40"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
        "alt": "cs",
        "name": "C#",
        "value": "70"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
        "alt": "mysql",
        "name": "MySQL",
        "value": "55"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg",
        "alt": "cloud",
        "name": "CLOUD",
        "value": "50"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        "alt": "sass",
        "name": "SASS",
        "value": "45"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
        "alt": "python",
        "name": "Python",
        "value": "70"
    },
]

const projects = [
    {
        src: "https://photoartcode.000webhostapp.com/favicon.ico",
        descr: <>{"React, Sass, router, api, "}<br/>{"typescript, adaptive"}</>,
        name: "AniBucket",
        url: "https://ani-bucket-dsv7yxcns-junkiez.vercel.app",
        github: "https://github.com/Junkiez/ANI-BUCKET"
    },
    {
        src: "https://raw.githubusercontent.com/Junkiez/REST-API/983e76d25d3dc5576642631f4a1bf1e18c760796/public/vite.svg",
        descr: <>{"Express, sequelize, vue, vite,"}<br/>{" postgres, aws"}</>,
        name: "RestApi",
        url: "https://wx2p2uqbwg.us-east-1.awsapprunner.com/",
        github: "https://github.com/Junkiez/REST-API"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-plain.svg",
        descr: <>{"Python, redis, flask, canvas,"}<br/>{" telegramWebApi"}</>,
        name: "Telegram WebApi bot",
        url: "https://wx2p2uqbwg.us-east-1.awsapprunner.com/",
        github: "https://github.com/Junkiez/IMAGE-FILTER-BOT"
    },
    {
        src: "https://raw.githubusercontent.com/Junkiez/CRYPTONOMY/main/static/favicon.ico",
        descr: <>{"  Python, flask, redis, vue,"}<br/>{" vuesax, pycoingecko"}</>,
        name: "CRYPTONOMY",
        url: "https://wx2p2uqbwg.us-east-1.awsapprunner.com/",
        github: "https://github.com/Junkiez/CRYPTONOMY"
    }
]


const steps = [
    {
        label: 'University. 2019-',
        description: `National Forestry University of Ukraine. Speciality - Computer Science`,
    },
    {
        label: 'Freelance. 2020-',
        description:
            'Work as full stack developer on freelance',
    },
    {
        label: 'Intellias. 2021-2022',
        description:
            'Course of react frontend developer',
    },
    {
        label: 'AliksIT 2022-',
        description: `Work as a junior front-end developer`,
    }
];

function App() {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const onPageLoad = () => {
            const timeoutLoading = window.setTimeout(() => {
                setLoad(false);
                window.clearTimeout(timeoutLoading);
            }, 1000);
        };
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim libero, pulvinar ut
                        gravida non,
                        vestibulum efficitur sem. Cras porta turpis risus, ac aliquet nisl vulputate id.
                    </p>
                </div>
            </header>
            <main>
                <Separator title="Technologies"/>
                <article className="flex-row">
                    <Radar/>
                    <Technologies technologies={technologies}/>
                </article>
                <Separator title="Education & Experience"/>
                <article className="flex-row">
                    <Stepper steps={steps}/>
                    <Packman/>
                </article>
                <Separator title="Projects"/>
                <article className="flex-row">
                    <ul>
                        {projects.map((p, index) => (
                            <li onClick={()=>window.location.href = p.github}>
                                <img src={p.src} alt={p.name} />{p.name}
                                {/*<a href={p.github}>github</a>*/}
                                <pre>{p.descr}</pre>
                            </li>
                        ))}
                    </ul>
                    <p id="title-description">
                        Check out more on my <a href="https://github.com/Junkiez">github</a>.
                    </p>
                </article>
            </main>
            <footer className="flex-row">
                <Tessaract/>
                <a href="https://t.me/KAZE_F">&ensp;Telegram</a>
                <a href="mailto:<KAZE>junkiezet@gmail.com?subject=">&ensp;Email</a>
                <a href="https://github.com/Junkiez">&ensp;GitHub</a>
                <Clock/>
            </footer>
        </div>
    );
}

export default App;
