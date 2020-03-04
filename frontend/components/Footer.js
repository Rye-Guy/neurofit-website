import React from 'react';
import Logo from '../static/images/neurofit-logo.svg';


const Footer = () => (
  <footer style={{padding: '42px'}} className="footer_area pos_footer_area h_footer_track">
    <div className="container">
      <div style={{alignItems: 'center'}} className="row">
        <div style={{textAlign: 'center'}} className="col-lg-6 col-md-6">
          <div className="f_widget dark_widget company_widget">
            <a href="#" className="f-logo"><Logo /></a>
            <p>2020 Neurofit</p>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className="col-lg-6 col-md-6">
          <a href="#" className="app_btn btn_hover cus_mb-10" target="_blank">Request A Booking</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
