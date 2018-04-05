import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text long enough (it is more than 5 characters)';

    if(props.textLength <= 5){
        validationMessage = 'Text too short (it is less than 5 characters)';
    }

   
    return (
        <div>
            {
                // props.textLength <= 5 ? <p>Text too short</p> : <p>Text is long enough</p>
                <p>{validationMessage}</p>
            }   
            <p><em>Click a character below to delete</em></p>
        </div>
    )
};

export default validation;