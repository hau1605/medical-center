import React from 'react';
import { Layout, Space } from 'antd';
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { Scrollbar } from 'react-scrollbars-custom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from './HomePage/HomePage';

const WebLayout = () => {
  return (
    <SnackbarProvider 
      maxSnack={4} 
      autoHideDuration={1500}
      iconVariant={{
        success: '🛒',
        error: '🗑️',
        warning: '⚠️',
        info: 'ℹ️',
      }}
    >
      <Scrollbar style={{ position: "unset", width: '100%', height: '100%' }}>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout style={{ height: '100vh', margin: '0', backgroundColor:"transparent"}}>
            <Header style={{ zIndex: 1 }}>Header</Header>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gioi-thieu" element={<HomePage />} />
                <Route path="/dat-lich-hen" element={<HomePage />} />
                <Route path="/san-pham" element={<HomePage />} />
                <Route path="/tin-tuc" element={<HomePage />} />
                <Route path="/lien-he" element={<HomePage />} />
                <Route path="/gio-hang" element={<HomePage />} />
              </Routes>
            <Footer />
          </Layout>
        </Space>
      </Scrollbar>
    </SnackbarProvider>
  )
};

export default WebLayout;
