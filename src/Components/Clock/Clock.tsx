import React, {useState} from 'react'
import './Clock.sass';

function Clock(props: any) {
    const [state, setState] = useState({date : new Date()});
    setInterval(
        () => setState({
            date: new Date()
        }),
        1000
    );
    return (
        <div className="clock-container">
            <h3>{state.date.toLocaleTimeString()}|{new Date().getTime()}utc</h3>
        </div>
    )
}

export default Clock
