import React from 'react';
import MainCTABtn from '../components/MainCTABtn.js'

const CTASection = ({background_image, icon, heading, button_text, button_href}) =>{
    return (
        <section style={{backgroundImage:  `url(${background_image})`, paddingBottom: '120px'}} className="tracking_getting_area sec_pad">
            <div className="container wow fadeInUp">
                <img style={{height: '250px', marginBottom: '42px'}} src={icon} />
                <h2 style={{marginBottom: '42px'}}>{heading}</h2>
                <MainCTABtn fat={false} button_text={button_text} button_href={button_href} />
            </div>
        </section>
    )
}

export default CTASection