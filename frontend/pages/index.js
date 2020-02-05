import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import ContentDivider from '../components/ContentDivider';
import Arrow from '../components/Arrow';
import HowItWorksItem from '../components/HowItWorksItem';
import Config from '../config';
import Logo from '../static/images/neurofit-logo.svg';

const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends Component {
  state = {
    id: '',
  };

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
    
    const { id } = this.state;
    const { headerMenu, page } = this.props;
    const howItWorkItems = page.acf.how_it_works_items.map(item => {
      return(<HowItWorksItem 
        heading={item.how_it_works_heading} 
        image_title={item.how_it_works_image.title} 
        image_alt={item.how_it_works_image.alt} 
        image_src={item.how_it_works_image.url} 
        paragraph={item.how_it_works_paragraph}
      />)
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
                <a href="#" className="btn btn--white btn--animated">Request a Demo</a>              
            </div>
          </div>
        </div>
        <div className="main">
          <section className="our-vision">
            <h3 className="our-vision__heading">{page.acf.our_vision_heading}</h3>
            <h4 className="our-vision__sub-heading">{page.acf.our_vision_sub_heading}</h4>
            <p className="our-vision__paragraph">{page.acf.our_vision_paragraph}</p>
          </section>
          <ContentDivider></ContentDivider>
          <section className="our-vision">
            <h3 className="our-vision__heading">{page.acf.how_it_works_heading}</h3>
            <h4 className="our-vision__sub-heading">{page.acf.how_it_works_sub_heading}</h4>
            <p className="our-vision__paragraph">{page.acf.how_it_works_paragraph}</p>
            <h4 className="our-vision__sub-heading">{page.acf.how_it_works_sub_heading}</h4>
            <Arrow alt={page.acf.arrow.alt} url={page.acf.arrow.url} title={page.acf.arrow.title}></Arrow>
            <div className="how-it-works">
              <h4 className="our-vision__sub-heading">{page.acf.how_it_works_items_title}</h4>
              <div className="how-it-works__items">
                {howItWorkItems}
              </div>
            </div>
          </section> 
        </div>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
