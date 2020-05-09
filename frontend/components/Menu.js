/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import Link from 'next/link';
// import Router from 'next/router';
// import Config from '../config';

const getSlug = url => {

  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';

};

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      path: 0,
      currentYScroll: 0,
      previousYScroll: 0,
      
    };
    this.navRef = React.createRef();
    
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname,
      previousYScroll: window.scrollY
    })
    // this.updateScrollPositionToState()
  }
  // //make these more isolated? Perhaps functions that would return ture of false and updated precviousScoll seperately.
  // updateScrollPositionToState = () =>{
  //   window.addEventListener('scroll', (e)=>{
  //     this.setState({
  //       currentYScroll: window.scrollY
  //     })
  //     this.addStickyPosition()
  //   })
  // }

  // addStickyPosition = () =>{
  //   if(this.state.currentYScroll < this.state.previousYScroll){  
  //     this.navRef.current.className = 'navbar navbar--sticky'
  //   }else if(this.navRef){
  //     this.navRef.current.className = 'navbar navbar--fadeout'
  //   }
  //   this.setState({
  //     previousYScroll: window.scrollY
  //   }) 
  // }

  render() {
    const { menu, companyLogo } = this.props;
    const { path } = this.state;
    return (
      <header className="header_area">
        <nav className="navbar navbar-expand-lg menu_one" data-spy="affix" data-offset-top="70"  ref={this.navRef}>
            <div className="container-fluid">
              <div className="navbar-brand">
                <a className="navbar-brand" href="/"><img src={companyLogo} width={72} height={72}/></a>
              </div>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_toggle">
                        <span className="hamburger">
                           <span></span>
                            <span></span>
                            <span></span>
                       </span>
                       <span className="hamburger-cross">
                            <span></span>
                            <span></span>
                        </span>
                    </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto menu">
                  {/* {menu.items.map((item, i) => {
                    if (item.object === 'custom') {
                      return (
                        <li key={i} className="nav-item">
                          <a className={path == item.url ? 'nav-link' : 'nav-link'} href={item.url} key={item.ID}>{item.title}</a>
                        </li>
                      );
                    }
                  })} */}
                </ul>
                <div className="tracking_btn" style={{marginRight: '18px'}}>
                  <a className="er_btn btn_hover" href="https://alex501627.typeform.com/to/yAatQk">Request A Demo</a>
                </div>
                <div className="tracking_btn">
                  <a className="er_btn btn_hover" href="https://neurofit.ca/neurofit.html">Use Neurofit</a>
                </div>
              </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Menu;
