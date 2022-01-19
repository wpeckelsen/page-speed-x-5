import React from 'react';
import "./Square.scss"

function Square({content}) {
    return (
        <div className="square"><h1 className="page-title">{content}</h1></div>
    );
}

export default Square;