import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto w-full flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;