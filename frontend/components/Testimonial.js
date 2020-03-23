import React from 'react';

const Testimonials = ({image, heading, sub_heading, paragraph}) => {
    return (
        <div className="app_testimonial_item text-center">
            <div className="author-img wow fadeIn" data-wow-delay="0.4s" ><img src={image} alt=""/></div>
            <div className="author_info">
                <h6 className="f_p f_500 f_size_18 t_color3 mb-0 wow fadeInLeft" data-wow-delay="0.4s">{heading}</h6>
                <p className="wow fadeInRight" data-wow-delay="0.4s">{sub_heading}</p>
            </div>
            <p style={{marginBottom: '35px'}} className="f_400 wow fadeIn" data-wow-delay="0.45s" >{paragraph}</p>
        </div>
    )
}

export default Testimonials    

