import React from 'react';

const MainCTAButton = ({text, url, color})=>{
    return (
        <a href={url} className={`btn  btn--animated btn--${color}`}>{text}</a>
    )
}

export default MainCTAButton