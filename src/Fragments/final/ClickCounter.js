import React from 'react';
import enhancedCounter from './enhancedCounter';


const ClickCounter = (props) => {
    return (
    <div>
        <button onClick={props.incrementCount}>
            <h2>Clickcounter clicks{props.count} times</h2></button>
    </div>
  )
}

export default enhancedCounter(ClickCounter) ;