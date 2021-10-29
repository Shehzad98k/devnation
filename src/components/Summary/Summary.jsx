import React from 'react'
import { Card, Row, Col } from 'antd';
import './Summary.css';
import SummaryItem from './SummaryItem';

const Summary = () => {

    return (
        <React.Fragment>
            <Card title="Summary" bordered={false}>
                <Row>
                    <Col span={12}>
                        <SummaryItem title="Attended" num="02" color="#17d570" />
                    </Col>
                    <Col span={12}>
                        <SummaryItem title="Appointments" num="08" color="#1756c2" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <SummaryItem title="Requests" num="10" color="#30a18e" />
                    </Col>
                    <Col span={12}>
                        <SummaryItem title="Cancelled" num="5" color="#ef7903" />
                    </Col>
                </Row>
            </Card>  
        </React.Fragment>
    )
}

export default Summary
