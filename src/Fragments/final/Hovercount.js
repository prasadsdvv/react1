import React from 'react';
import enhancedCounter from './enhancedCounter';

const Hovercount = (props) => {
  return (
    <div>
        <button onMouseEnter={props.incrementCount}><h4>hover count{props.count}</h4></button>
    </div>
  )
}

export default enhancedCounter(Hovercount); 