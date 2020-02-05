import React from 'react';

const HowItWorksItem = ({heading, image_title, image_alt, image_src, paragraph}) =>{
    return(
        <div className="how-it-works__item">
            <h4 className="how-it-works__heading">{heading}</h4>
            <img className="how-it-works__image" src={image_src} alt={image_alt} title={image_title} />
            <p className="how-it-works__paragraph">{paragraph}</p>
        </div>
    )
}

export default HowItWorksItem