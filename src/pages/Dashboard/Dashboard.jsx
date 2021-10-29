import React from 'react'
import { Card, Row, Col } from 'antd';
import Summary from '../../components/Summary/Summary';
import Earnings from '../../components/Earnings/Earnings';
import Calender from '../../components/Calender/Calender';
import Appointments from '../../components/Appointments/Appointments';
import Requests from '../../components/Requests/Requests';

const Dashboard = () => {
    return (
        <React.Fragment>    
            <Row gutter={16}>
                <Col span={8}>
                    <Summary />
                </Col>
                <Col span={8}>
                <Card title="Earnings" bordered={false}>
                    <Earnings />
                </Card>
                </Col>
                <Col span={8}>
                <Card title="Calender" bordered={false}>
                    <Calender />
                </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={16}>
                    <Card title="Appointments" bordered={false}>
                        <Appointments />
                    </Card>
                </Col>
                <Col span={8}>
                <Card title="Requests" bordered={false}>
                    <Requests />
                </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Dashboard
