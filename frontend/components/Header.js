import React from 'react';
import Head from 'next/head';
import stylesheet from '../src/styles/style.scss';

const Header = ({title, description}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161723184-1"></script>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/static/vendors/bootstrap-selector/css/bootstrap-select.min.css" />
    <link rel="stylesheet" href="/static/vendors/themify-icon/themify-icons.css" />
    <link rel="stylesheet" href="/static/vendors/flaticon/flaticon.css" />
    <link rel="stylesheet" href="/static/vendors/animation/animate.css" />
    <link rel="stylesheet" href="/static/vendors/owl-carousel/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="/static/vendors/nice-select/nice-select.css" />
    <link rel="stylesheet" href="/static/vendors/magnify-pop/magnific-popup.css" />
    <link rel="icon" href="/static/images/favicon.ico" />
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html:  stylesheet}}
    />
    <link rel="stylesheet" href="/static/css/responsive.css" />
  </Head>
);

export default Header;
