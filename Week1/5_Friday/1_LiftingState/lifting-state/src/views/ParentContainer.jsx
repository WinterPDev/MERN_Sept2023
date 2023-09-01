import React, { useState } from 'react'
import ChildCounter from '../components/ChildCounter'
import ChildDisplay from '../components/ChildDisplay'

// We want the parent to be how we communicate changes to the children components

export const ParentContainer = () => {
    // Objective 1: Create Variable for passing info into children.
    const [count, setCount] = useState(0);

    // Objective 2: Create a function for our increase Count to pass into the child.
    const addCount = () => {
        setCount(count + 1);
    }


    return (
        <fieldset style={{ backgroundColor: "darkgrey" }}>
            <legend>ParentContainer.jsx</legend>
            <h1>Update Count from the Counter</h1>
            <p>Count in Parent: {count}</p>
            <ChildCounter addCount={addCount} />
            <ChildDisplay count={count} />

        </fieldset>
    )
}
