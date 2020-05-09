import React from 'react';
import Logo from '../static/images/neurofit-logo.svg';


const Footer = () => (
  <footer style={{padding: '42px'}} className="footer_area pos_footer_area h_footer_track">
    <div className="container">
      <div style={{alignItems: 'center'}} className="row">
        <div style={{textAlign: 'center'}} className="col-lg-12 col-md-12">
          <div className="f_widget dark_widget company_widget">
            <a href="#" className="f-logo"><Logo /></a>
            <p>2020 Neurofit</p>
            <div className="f_social_icon">
              <a href="https://www.facebook.com/neurofitvr" className="ti-facebook"></a>
              <a href="https://www.instagram.com/neurofitvr" className="ti-instagram"></a>
              <a href="https://twitter.com/neurofitvr" className="ti-twitter-alt"></a>
              <a href="https://www.linkedin.com/company/neurofitvr" className="ti-linkedin"></a>
            </div>
          </div>
        </div>
        {/* <div style={{textAlign: 'center'}} className="col-lg-6 col-md-6">
          <a href="#" className="app_btn btn_hover cus_mb-10" target="_blank">Request A Booking</a>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
