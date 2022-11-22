import React from 'react';
import './Drawer.sass'
import Draw from '../../Scripts/Draw'

function Drawer(props: any) {
    setTimeout(() => Draw(), 10)
    return (
        <div className="Drawer">
            <canvas id="avatar"></canvas>
            <h2>{ props.name }</h2>
        </div>
    );
}

export default Drawer;
