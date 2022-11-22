import React from 'react'
import './Blocks.sass';

function Blocks(props: any) {
    var elems = []
    for (let i = 0; i < props.string.length; i++) {
        elems.push(<div>{props.string[i]}</div>)
    }
    return (
        <div className="square-container">
            <h2>{ elems }</h2>
        </div>
    )
}

export default Blocks
