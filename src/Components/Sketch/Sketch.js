import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;
export default (props) => {
    var Sz = 100;
    var N = 50;
    var x = [];
    var y = [];
    var z = [];
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(375, 500, p5.WEBGL).parent(canvasParentRef);
        for (var i = 0; i < N; i++) {
            x[i] = p5.random(-Sz, Sz);
            y[i] = p5.random(-Sz, Sz);
            z[i] = p5.random(-Sz, Sz);
        }
    };

    const draw = (p5) => {
        for (let i = 1; i < N; i++) {
            p5.push();
            p5.rotateY(p5.frameCount * 0.01);
            p5.rotateX(p5.frameCount * 0.01);
            p5.rotateZ(p5.frameCount * 0.01);
            p5.translate(x[i], y[i], z[i]);
            let R = 0;
            let G = 255 * p5.abs(y[i] / p5.max(y));
            let B = 255 * p5.abs(z[i] / p5.max(z));
            p5.stroke(R, G, B);
            p5.fill(R, G, B);
            p5.sphere(Sz / 25, 11);
            p5.pop();
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};
