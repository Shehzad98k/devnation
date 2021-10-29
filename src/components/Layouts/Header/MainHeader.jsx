import React from 'react'
import { Layout, Row, Col } from 'antd';
import User from '../../../assets/images/user.jpg';
import { BellOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;

const MainHeader = () => {
    return (
        <Header className="site-layout-background header" style={{ padding: '0 25px' }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>
                        <div>
                            <img src={User} className="user-img" alt="user" />
                        </div>
                        <div>
                            <h3 className="user-name">Dr. John Doe</h3>
                            <p style={{position:'absolute', top:'58px',left:'96px'}}>Speciality:</p>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="notification">
                        <p>Availability: <b>12:00 AM</b> to <b>9:00 PM</b>
                            Duration: <b>15 minutes</b> 
                        </p>
                        <a href="#">Set Availability</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="logout" style={{float:'right'}}>
                        <p><BellOutlined /></p>
                        <p><LogoutOutlined /> Log out</p>
                    </div>
                </Col>
            </Row>  
        </Header>
    )
}

export default MainHeader
