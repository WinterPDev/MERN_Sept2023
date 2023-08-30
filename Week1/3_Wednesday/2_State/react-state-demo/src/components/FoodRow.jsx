import React from 'react';

function FoodRow(props) {
    return (
        <>
            <fieldset>
                <legend>FoodRow.jsx</legend>
                <div className="centered">
                    {props.children}
                </div>
            </fieldset>
        </>
    );
}

export default FoodRow;