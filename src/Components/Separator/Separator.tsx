import React from 'react'
import './Separator.sass'

function Separator(props: any) {
    return (
        <div className="Separator">
            <h4>{props.title}</h4>
            <hr/>
        </div>
    );
}

export default Separator;
