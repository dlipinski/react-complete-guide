import React from 'react';

const userOutput = (props) => {
    const style = {
        border: '1px solid #424242',
        color: '#646464',
        width: '50%',
        margin: '1rem auto',
        padding: '1rem'
    }

    return (
        <div>
            <p
                style={style}>{props.username}</p>
            <p></p>
        </div>
    )
}

export default userOutput;