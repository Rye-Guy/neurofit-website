import React from 'react';

const HowItWorksItem = ({heading, image_title, image_alt, image_src, paragraph}) =>{
    return(
        <div className="item">
            <img className="item__image" src={image_src} alt={image_alt} title={image_title} />
            <h4 className="item__heading">{heading}</h4>
            <p className="item__paragraph">{paragraph}</p>
        </div>
    )
}

export default HowItWorksItem