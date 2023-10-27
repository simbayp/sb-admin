import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ui/footer/Footer';
import LogoutModal from '../ui/logout/LogoutModal';
import Navbar from '../ui/navbar/Navbar';
import Sidebar from '../ui/sidebar/Sidebar';

const DashboardUtils = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
      <LogoutModal />
    </div>
  );
};

export default DashboardUtils;
