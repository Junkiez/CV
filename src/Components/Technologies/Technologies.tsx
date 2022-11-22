import React from 'react';
import './Technologies.css'
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

function Technologies({ technologies }:{ technologies: {src:string,alt:string,name:string,value:string}[] }) {
    return (
        <div className="Technologies">
            <h3></h3>
            <ul className={"double"}>
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
