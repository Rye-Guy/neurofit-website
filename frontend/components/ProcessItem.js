import React from 'react';

const ProcessItem = ({heading, image_src, paragraph}) =>{
    return(
        <div className="process__item">
            <h4 className="process__heading">{heading}</h4>
            <img className="process__image" src={image_src} alt="process image" />
            <p className="process__paragraph">{paragraph}</p>
        </div>
    )
}

export default ProcessItem