import React from 'react';

const FormDisplayComponent = (props) => {
    return (
        <fieldset>
            <legend>FormDisplayComponent.jsx</legend>
            <div>
                <p>Title : {props.title}</p>
                <p>Year : {props.year}</p>
            </div>

        </fieldset>
    );
};

export default FormDisplayComponent;