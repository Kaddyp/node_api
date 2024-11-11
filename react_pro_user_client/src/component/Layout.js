// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <React.Fragment>
        <Header />
        <Outlet /> {/* Renders the matched child route component */}
        <Footer />
    </React.Fragment>
  );
};

export default Layout;
