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
import Testimonials from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import MainCTABtn from '../components/MainCTABtn';
import CTASection from '../components/CTASection';
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
      console.log(err)
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
          button_text={page.acf.main_cta_button.button_text} 
          button_href={page.acf.main_cta_button.button_destination}
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

    const HowItWorksItems = page.acf.how_it_works_section.process_items.map((item, i)=>{
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

    const STestimonal = page.acf.testimonials.testimonial.map((item, i)=>{
      return (
        <Testimonials
          key={i}
          image={item.testimonial_image}
          heading={item.testimonial_name}
          sub_heading={item.testimonial_title}
          paragraph={item.testimonial_body}
        />
      )
    })


    console.log(page.acf)
    
    return (
      <Layout title="Home Page">
        <Menu menu={headerMenu} companyLogo={page.acf.company_logo} />
        <section className="tracking_banner_area text-center">
          <div className="tracking_banner_content">
              <h3>{page.acf.header_content.normal_text} <strong>{page.acf.header_content.strong_text}</strong> </h3>
              <p className="wow fadeInUp" data-wow-delay="0.9s">
                {page.acf.header_content.contact_info}
                <i style={{fontSize:'12px', transform: 'translateY(-4px)'}}>{page.acf.header_content.formerly_text}</i>
              </p>
              <img style={{position: 'relative', zIndex: '1', height: '630px'}}  src="/static/images/neurofit-logo.svg" alt="" />
          </div>
          <div className="row" style={{justifyContent: 'center'}}>
              <MainCTABtn fat={true} button_text={page.acf.main_cta_button.button_text} button_href={page.acf.main_cta_button.button_destination}></MainCTABtn>
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
        <BreadcrumbArea image={page.acf.breadcrumb_section.background_image} heading={page.acf.process_section.process_heading} paragraph={page.acf.breadcrumb_section.paragraph} />
        <section className="process_area bg_color sec_pad">
          <div className="container">
            <div className="features_info">
                <img className="dot_img" alt=""/>
                {ProcessItems}
            </div>
          </div>
        </section>
        <BreadcrumbArea image={page.acf.breadcrumb_section.background_image} heading={page.acf.how_it_works_section.process_heading} paragraph={page.acf.breadcrumb_section.paragraph} />
        <section className="process_area bg_color sec_pad">
          <div className="container">
            <div className="features_info">
                <img className="dot_img" alt=""/>
                {HowItWorksItems}
            </div>
          </div>
          <div className="row" style={{justifyContent: 'center', paddingBottom: '96px'}}>
            <MainCTABtn button_text={page.acf.main_cta_button.button_text} button_href={page.acf.main_cta_button.button_destination}></MainCTABtn>
          </div>
        </section>
        {/* <section className="app_testimonial_area" style={{paddingTop: '0px'}}>
          <div className="text_shadow" data-line="Feedback"></div>
          <div className="container nav_container">
            <div className="shap one"></div>
            <div className="shap two"></div>
            <div className="container">
              <h2 style={{textAlign: 'center', fontSize: '38px'}} className="f_size_30 f_600 t_color3 l_height40 text-center mb_60 wow fadeInLeft" data-wow-delay="0.7s">{page.acf.testimonials.testimonials_heading}</h2>
              <div className="">
                {STestimonal}
              </div>
            </div>
          </div>
        </section> */}
        <section className="container">
          <ContactForm />
        </section>
        <CTASection
          background_image={page.acf.cta_section.background_image}
          icon={page.acf.cta_section.icon}
          heading={page.acf.cta_section.section_heading}
          button_text={page.acf.main_cta_button.button_text} 
          button_href={page.acf.main_cta_button.button_destination}
        />
      </Layout>
    );
  }
}

export default PageWrapper(Index);
