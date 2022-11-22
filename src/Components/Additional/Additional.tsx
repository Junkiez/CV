import React from 'react'
import '../Technologies/Technologies.css'
import webstorm from '../../Resourses/webstorm_logo_icon_144744.svg'

function Additional() {
    return (
        <div className="Technologies">
            <h3>I use:</h3>
            <ul>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="go"/>Go
                    <progress max="100" value="40"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                         alt="javascript"/>JS
                    <progress max="100" value="55"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>React
                    <progress max="100" value="40"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg" alt="redis"/>Redis
                    <progress max="100" value="20"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css3"/>CSS
                    <progress max="100" value="70"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html5"/>HTML
                    <progress max="100" value="85"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" alt="mysql"/>Mysql
                    <progress max="100" value="25"></progress>
                </li>
                <li>
                    <img src={webstorm} alt="webstorm"/>WS
                    <progress max="100" value="65"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt="vscode"/>VSCode
                    <progress max="100" value="40"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                         alt="github"/>GitHub
                    <progress max="100" value="45"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku"/>Heroku
                    <progress max="100" value="75"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                         alt="npm"/>NPM
                    <progress max="100" value="10"></progress>
                </li>
            </ul>
            <h3>Has experience with:</h3>
            <ul>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="c#"/>C#
                    <progress max="100" value="70"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" alt="python"/>Python
                    <progress max="100" value="70"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg" alt="vue js"/>VUEjs
                    <progress max="100" value="60"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php"/>Php
                    <progress max="100" value="30"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu"/>Ubuntu
                    <progress max="100" value="35"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg" alt="figma"/>Figma
                    <progress max="100" value="20"></progress>
                </li>
                <li>
                    <img src="https://app.spline.design/_assets/_icons/icon_favicon32x32.png" alt='spline'/>Spline
                    <progress max="100" value="15"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
                         alt="markdown"/>Markdown
                    <progress max="100" value="70"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-line.svg" alt="apache"/>Apache
                    <progress max="100" value="10"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="flask"/>Flask
                    <progress max="100" value="35"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg"
                         alt="google cloud"/>GCP
                    <progress max="100" value="25"></progress>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                         alt={"postgresql"}/>PSql
                    <progress max="100" value="15"></progress>
                </li>
            </ul>
        </div>
    );
}

export default Additional;
