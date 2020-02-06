import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import MainCTAButton from '../components/MainCTAButton';
import ContentDivider from '../components/ContentDivider';
import Arrow from '../components/Arrow';
import HowItWorksItem from '../components/HowItWorksItem';
import ProcessItem from '../components/ProcessItem';
import CompositionImage from '../components/CompositionImage';
import Config from '../config';
import Logo from '../static/images/neurofit-logo.svg';

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
    const howItWorkItems = page.acf.how_it_works_items.map((item, i)=>{
      return(<HowItWorksItem 
        key={i}
        heading={item.how_it_works_heading} 
        image_title={item.how_it_works_image.title} 
        image_alt={item.how_it_works_image.alt} 
        image_src={item.how_it_works_image.url} 
        paragraph={item.how_it_works_paragraph}
      />)
    });

    const processItems = page.acf.process_items.map((item, i)=>{
      return(<ProcessItem 
        key={i}
        heading={item.process_item_title}
        image_src={item.process_item_image}
        paragraph={item.process_item_paragraph}
      />)
    });

    const imageCompositionSection = page.acf.image_composition_section.map((item, i)=>{
      return <CompositionImage key={i} alt={item.image.alt} url={item.image.url} image_class={`composition__photo composition__photo--p${i+1}`} />
    })

    console.log(page.acf)
    
    return (
      <Layout title="Home Page">
        <Menu menu={headerMenu} />
        <div className="header" style={{backgroundImage: `url(${page.acf.header_image})`}}>
          <div className="header__logo">
            <Logo width={440} height={500} />
          </div>
          <div className="header__title">
            <h1 className="header__title--main">{page.acf.header_main_heading}</h1>
            <h2 className="header__title--sub">{page.acf.header_sub_heading}</h2>
            <div className="header__cta">
                <MainCTAButton text={page.acf.request_demo_cta.button_text} url={page.acf.request_demo_cta.button_url} color="white" />         
            </div>
          </div>
        </div>
        <div className="main">
          <section className="our-vision u-max-container-width">  
            <h3 className="our-vision__heading">{page.acf.our_vision_heading}</h3>
            <div className="our-vision__vector-wrapper">
              <h4 className="our-vision__sub-heading">{page.acf.our_vision_sub_heading}</h4>
              <p className="our-vision__paragraph">{page.acf.our_vision_paragraph}</p>
              <img src={page.acf.our_vision_background_vector} className="our-vision__vector" />
            </div>
          </section>
          <section className="how-it-works u-max-container-width">
            <h3 className="how-it-works__heading">{page.acf.how_it_works_heading}</h3>
            <h4 className="how-it-works__sub-heading">"{page.acf.how_it_works_sub_heading}"</h4>
            <p className="how-it-works__paragraph">{page.acf.how_it_works_paragraph}</p>
          </section> 
          <Arrow alt={page.acf.arrow.alt} url={page.acf.arrow.url} title={page.acf.arrow.title}></Arrow>
          <section className="what-we-do u-max-container-width">
            <h4 className="what-we-do__heading section__heading">{page.acf.how_it_works_items_title}</h4>
            <div className="what-we-do__items">
              {howItWorkItems}
            </div>
          </section>
          <section className="the-process u-max-container-width">
            <h4 className="the-process__heading section__heading">{page.acf.process_items_title}</h4>
            <div className="the-process__layout">
              <div className="the-process__items">
                {processItems}
              </div>
              <div className="the-process__images">
                <div className="composition" style={{display: 'none'}}>
                  {imageCompositionSection}
                </div>
              </div>
              <div className="headset-featured">
                <div className="headset-featured__image">
                  <img src={page.acf.headset_image.url} alt={page.acf.headset_image.alt}/>
                </div>
              </div>
            </div>
          </section>
          <section className="cta">
            <MainCTAButton text={page.acf.request_demo_cta.button_text} url={page.acf.request_demo_cta.button_url} color="white" />         
          </section>
        </div>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
