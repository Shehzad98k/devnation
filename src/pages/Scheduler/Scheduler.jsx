import React from 'react'
import { Card, Row, Col } from 'antd';
import SchedulerComponent from '../../components/Scheduler/SchedulerComponent';
import Appointments from '../../components/Appointments/Appointments';
import Requests from '../../components/Requests/Requests';

const Scheduler = () => {
    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col span={16}>
                    <Card title="Scheduler" bordered={false}>
                        <SchedulerComponent />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Appointments" style={{marginBottom:'14px'}} bordered={false}>
                        <Appointments />
                    </Card>
                    <Card title="Requests" bordered={false}>
                        <Requests />
                    </Card>
                </Col>
            </Row>
    
        </React.Fragment>
    )
}

export default Scheduler
