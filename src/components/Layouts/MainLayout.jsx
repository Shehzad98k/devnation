import React from 'react';
import { Layout } from 'antd';

import MainHeader from './Header/MainHeader';
import Sidebar from './Sidebar/Sidebar';

const { Content } = Layout;

const MainLayout = (props) => {
    
    return (
        <Layout>
        <Sidebar />
        <Layout className="site-layout">
          <MainHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          {props.children}
          </Content>
        </Layout>
      </Layout>
    )
}

export default MainLayout
