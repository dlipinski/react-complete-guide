import React from 'react';

const validation = (props) => {
    let message = 'Text long enough';

    if ( props.length < 5 ) {
        message = 'Text too short'
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default validation;