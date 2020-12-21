import React from 'react'

const functionalComponent = (props) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.onChange}></input><br />
            <button type='button' onClick={props.onClick}>Add</button>
        </div>
    );
}

export default functionalComponent;