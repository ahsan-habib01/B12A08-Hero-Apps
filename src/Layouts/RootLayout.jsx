import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto w-full flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;