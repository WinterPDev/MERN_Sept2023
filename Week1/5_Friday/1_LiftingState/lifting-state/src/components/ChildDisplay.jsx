import React from 'react'

export const ChildDisplay = (props) => {
    return (
        <fieldset style={{ backgroundColor: "lightgreen" }}>
            <legend>ChildDisplay.jsx</legend>
            <p>Count in Display: {props.count}</p>
        </fieldset>
    )
}

export default ChildDisplay;