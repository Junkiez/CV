import React, {useState} from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;
export default (props) => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(375, 500, p5.WEBGL).parent(canvasParentRef);
    };
    const draw = (p5) => {
        variableEllipse(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);

        const variableEllipse = (x, y, px, py)=> {
            let speed = p5.abs(x-px) + p5.abs(y-py);
            p5.stroke(speed);
            p5.ellipse(x, y, speed, speed);
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};
