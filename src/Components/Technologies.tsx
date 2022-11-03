import React from 'react';
import '../Stylesheets/Technologies.css'
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

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
        "value": "35"
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

function Technologies() {
    return (
        <div className="Technologies">
            <h3></h3>
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
