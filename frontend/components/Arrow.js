import React from 'react';

const Arrow = ({url, alt, title}) => {
    return (
        <div className="down-arrow">
            <img className="down-arrow__img" alt={alt} src={url} title={title}/> 
        </div>
    )
}

export default Arrow