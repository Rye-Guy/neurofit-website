/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Config from '../config';
import Logo from '../static/images/neurofit-logo.svg';

const getSlug = url => {

  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';

};

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      path: String,
      yScroll: 0,
    };
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname
    })
  }



  render() {
    const { menu } = this.props;
    const { path } = this.state;
    return (
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <Link href="/">
              <a className="navbar__logo-link">
                <Logo width={72} height={72}/>
                <div className="navbar__logo-text">
                  NeurofitFit VR<br/>
                  Redefine Rehabilitation 
                </div>
              </a>
            </Link>
          </div>
          <div className="navbar__items">
            {menu.items.map(item => {
              if (item.object === 'custom') {
                return (
                  <a className={path == item.url ? 'navbar__items navbar__item--active' : 'navbar__items'} href={item.url} key={item.ID}>{item.title}</a>
                );
              }
              const slug = getSlug(item.url);
              const actualPage = item.object === 'category' ? 'category' : 'post';
              return (
                <Link
                  as={`/${item.object}/${slug}`}
                  href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                  key={item.ID}
                  className="navbar__items"
                >
                  <a>{item.title}</a>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className="dropdown bb flex justify-center items-center dn-l">
          <select
            onChange={handleSelectChange}
          >
            <option value={false}>Menu</option>
            {menu.items.map(item => {
              if (item.object === 'custom') {
                return (
                  <option
                    value={item.url}
                    key={item.ID}
                  >
                    {item.title}
                  </option>
                );
              }
              const slug = getSlug(item.url);
              const actualPage = item.object === 'category' ? 'category' : 'post';
              return (
                <option
                  value={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                  key={item.ID}
                >
                  {item.title}
                </option>
              );
            })}
          </select>
        </div> */}
      </div>
    );
  }
}
export default Menu;
