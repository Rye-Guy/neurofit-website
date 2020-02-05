import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = props => {
  const { children, title } = props;
  return (
    <div>
      <Header title={title}/>
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
