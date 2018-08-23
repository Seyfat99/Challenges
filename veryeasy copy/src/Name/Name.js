import React from 'react';

const name = ({firstName}) => {
    return (
        <div className="header">
            <h1>Hello World, {firstName}</h1>
        </div>
    );
};

export default name;