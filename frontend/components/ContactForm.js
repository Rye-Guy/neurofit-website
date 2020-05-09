import React from 'react'

const ContactFrom = ({}) => {
    return (
        <div className="contact_form wow fadeIn" data-wow-delay="0.4s" style={{margin: '42px'}}>
            <h2 style={{textAlign: 'center', fontSize: '38px'}} className="f_p f_size_22 t_color3 f_600 l_height28 mt_100 mb_40">Leave a Message</h2>
            <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5lofjeIWLuWM3MUAvZ0ceIRh58G2c8Cr52XYgURGU4iMmow/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
            </div>
        </div>
    )
}

export default ContactFrom