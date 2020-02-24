import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import CompanyLogoContainer from '../components/CompanyLogoContainer';
import FeatureItem from '../components/FeatureItem';
import BreadcrumbArea from '../components/BreadcrumbArea';
import GameImage from '../components/GameImage';
import ProcessItem from '../components/ProcessItem';
import Config from '../config';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends Component {

  static async getInitialProps() {
    try {
      const [page, posts, pages] = await Promise.all([
        wp
          .pages()
          .slug('welcome')
          .embed()
          .then(data => {
            console.log(data[0])
            return data[0];
          }),
        wp.posts().embed(),
        wp.pages().embed(),
      ]);

      return { page, posts, pages };
    } catch (err) {
      if (err.data.status === 403) {
        tokenExpired();
      }
    }

    return null;
  }

  componentDidMount() {

  }

  render() {
    
    const { headerMenu, page } = this.props;

    const CompanyLogoImages = page.acf.header_content.featured_brands_logo.map((item, i)=>{
      return <CompanyLogoContainer key={i} url={item.featured_brands_logo} />
    });

    const FeatureContentBlocks = page.acf.feature_items.map((item, i)=>{
      return (
        <FeatureItem 
          key={i}
          reverse={((i + 1) % 2) ? false : true}
          image={item.feature_item.feature_image}
          heading={item.feature_item.feature_heading}
          paragraph={item.feature_item.feature_paragraph}
        />
      );
    });

    const GameImages = page.acf.game_images.map((item, i)=>{
      return <GameImage key={i} image={item.game_image} heading={item.image_heading} fadeInDelay={(i+6)} />
    });

    const ProcessItems = page.acf.process_section.process_items.map((item, i)=>{
      return (
        <ProcessItem
          key={i}
          reverse={((i + 1) % 2) ? false : true}
          heading={item.process_heading}
          paragraph={item.process_paragraph}
          image={item.process_image}
          icon={item.process_icon}
        />
      )
    });





    console.log(page.acf)
    
    return (
      <Layout title="Home Page">
        <Menu menu={headerMenu} companyLogo={page.acf.company_logo} />
        <section className="tracking_banner_area text-center">
          <div className="tracking_banner_content">
              <h3 className="wow fadeInUp" data-wow-delay="0.8s">{page.acf.header_content.normal_text} <strong>{page.acf.header_content.strong_text}</strong> </h3>
              <p className="wow fadeInUp" data-wow-delay="0.9s">
                {page.acf.header_content.contact_info}
                <i style={{fontSize:'12px', transform: 'translateY(-4px)'}}>{page.acf.header_content.formerly_text}</i>
              </p>
              <img className="wow fadeIn" data-wow-delay="0.9s" src="/static/images/neurofit-logo.svg" alt="" style={{height: '630px'}} />
          </div>
          <div className="row tracking_software_logo wow fadeInUp" data-wow-delay="0.9s">
            {CompanyLogoImages}
          </div>
        </section>
        <section className="service_promo_area">
          <div className="s_features_section">
            <div className="container custom_container">
              {FeatureContentBlocks}
            </div>
          </div>
        </section>
        <BreadcrumbArea image={page.acf.breadcrumb_section.background_image} heading={page.acf.breadcrumb_section.heading} paragraph={page.acf.breadcrumb_section.paragraph} />
        <div className="container custom_container" style={{marginTop: '100px', marginBottom: '100px'}}>
          <div className="row portfolio_gallery mb-50" id="work-portfolio">
            {GameImages}
          </div>
        </div>
        <BreadcrumbArea image={page.acf.breadcrumb_section.background_image} heading={page.acf.breadcrumb_section.heading} paragraph={page.acf.breadcrumb_section.paragraph} />
        <section className="process_area bg_color sec_pad">
          <div className="container">
            <div className="features_info">
                <img className="dot_img" src={page.acf.process_section.process_background} alt=""/>
                {ProcessItems}
            </div>
            <div className="centered_btn">
              <a href="#" className="btn_hover agency_banner_btn mt_30 center">Request A Demo</a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
