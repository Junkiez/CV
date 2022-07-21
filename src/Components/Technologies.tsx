import React from 'react';
import '../Stylesheets/Technologies.css'
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const technologies = [
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
        "alt": "go",
        "name": "Go",
        "value": "40"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        "alt": "js",
        "name": "JS",
        "value": "55"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "alt": "react",
        "name": "React",
        "value": "40"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
        "alt": "redis",
        "name": "Redis",
        "value": "20"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        "alt": "css3",
        "name": "CSS",
        "value": "70"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        "alt": "html5",
        "name": "HTML",
        "value": "85"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
        "alt": "go",
        "name": "MySQL",
        "value": "25"
    },
    {
        "src": "https://adbdatabase.000webhostapp.com/webstorm_logo_icon_144744.svg",
        "alt": "go",
        "name": "WebStorm",
        "value": "65"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg",
        "alt": "go",
        "name": "VSCode",
        "value": "40"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        "alt": "go",
        "name": "Github",
        "value": "45"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
        "alt": "go",
        "name": "Heroku",
        "value": "75"
    },
    {
        "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        "alt": "go",
        "name": "NPM",
        "value": "10"
    },
]

function Technologies() {
    return (
        <div className="Technologies">
            <h3>I use:</h3>
            <ul>
                {technologies.map((tech, index) => (
                    <li>
                        <img src={tech.src} alt={tech.alt} />{tech.name}
                        <progress max="100" value={tech.value}></progress>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Technologies;
