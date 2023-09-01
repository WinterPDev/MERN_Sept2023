import React from 'react'

export const ChildCounter = (props) => {
    return (
        <fieldset style={{ backgroundColor: "lightblue" }}>
            <legend>ChildCounter.jsx</legend>
            <button onClick={() => props.addCount()}>Increase Count</button>
        </fieldset>
    )
}

export default ChildCounter;