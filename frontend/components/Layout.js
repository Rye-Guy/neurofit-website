import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Preloader from './Preloader';

const Layout = props => {
  const { children, title } = props;
  return (
    <div>
      <Preloader></Preloader>
      <div className="body_wrapper">
        <Header title={title}/>
        <main>
          {children}
        </main>
        <Footer />
        <script src="/static/js/jquery-3.2.1.min.js"></script>
        <script src="/static/js/propper.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src="/static/vendors/bootstrap-selector/js/bootstrap-select.min.js"></script>
        <script src="/static/vendors/wow/wow.min.js"></script>
        <script src="/static/vendors/sckroller/jquery.parallax-scroll.js"></script>
        <script src="/static/vendors/owl-carousel/owl.carousel.min.js"></script>
        <script src="/static/vendors/nice-select/jquery.nice-select.min.js"></script>
        <script src="/static/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="/static/vendors/isotope/isotope-min.js"></script>
        <script src="/static/vendors/magnify-pop/jquery.magnific-popup.min.js"></script>
        <script src="/static/js/main.js"></script>
      </div>
    </div>
    
  );
};

export default Layout;
