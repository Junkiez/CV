import React from 'react'
import '../Stylesheets/Pad.css';

function Pad() {
    const notes = [
        {
            'C3': 130.81,
            'D3': 146.83,
            'E3': 164.81,
            'F3': 174.61,
            'G3': 196.00,
            'A3': 220.00,
            'B3': 246.94,
        },
        {
            'C4': 261.63,
            'D4': 293.66,
            'E4': 329.63,
            'F4': 349.23,
            'G4': 392.00,
            'A4': 440.00,
            'B4': 493.88,
        },
        {
            'C5': 523.25,
            'D5': 587.33,
            'E5': 659.26,
            'F5': 698.46,
            'G5': 783.99,
            'A5': 880.00,
            'B5': 987.77,
        },
        {
            'C6': 1046.50,
            'D6': 1174.66,
            'E6': 1318.51,
            'F6': 1396.91,
            'G6': 1567.98,
            'A6': 1760.00,
            'B6': 1975.53,
        }
    ]
    function play(frequency: number): void {
        let context = new AudioContext()
        let o = context.createOscillator()
        let g = context.createGain()
        let a = context.createWaveShaper()

        o.frequency.value = frequency
        o.connect(g)
        o.connect(a)
        g.connect(context.destination)
        o.type = 'triangle';
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5)
        o.start(0)
    }
    let elems = []
    for (let i of notes) {
        for(let j in i){
            // @ts-ignore
            elems.push(<button onClick={() => play(i[j])}>{j}</button>)
        }
        elems.push(<br/>)
    }
    return (
        <div className="pad-container">
            { elems }
        </div>
    )
}

export default Pad
