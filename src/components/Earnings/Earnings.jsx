import React from 'react'
import { Statistic, Row, Col} from 'antd';
import './Earnings.css';

const Earnings = () => {
    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col span={24}>
                <Statistic title="Total Recieved Payments" value={12,312} />
                </Col>
                <Col span={24}>
                <Statistic title="Todays Payments" value={12,312} precision={2} />
                </Col>
            </Row>    
        </React.Fragment>
    )
}

export default Earnings
