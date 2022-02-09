import React from 'react';
import "./Square.scss"

function Square({content}) {
    return (
        <div className="square">
           <span> {content}</span>
        </div>
    );
}

export default Square;