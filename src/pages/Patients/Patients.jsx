import React, { useState } from 'react'
import { Card, Row, Col, Avatar  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Patients = () => {
    //list of patients(idealy would come from an API)
    const [patients, setpatients] = useState([
        {
            name:'Margorat',
            gender:'Female',
            appointments:4
        },
        {
            name:'John Doe',
            gender:'Male',
            appointments:5
        },
        {
            name:'Chris tucker',
            gender:'Male',
            appointments:2
        },
        {
            name:'Dua Lipa',
            gender:'Female',
            appointments:4
        },
        {
            name:'Eddy Murphy',
            gender:'Male',
            appointments:1
        },
        {
            name:'Kate Keith',
            gender:'Female',
            appointments:11
        }
    ])
    return (
        <React.Fragment>
            <Card title="Patients" bordered={false}>
                <Row gutter={16}>
                    {patients.map(patient => (
                        <Col span={8}>
                            <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            actions={[
                            patient.gender,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={patient.name}
                            description={`Appointments: ${patient.appointments}`}
                            style={{padding:'10px'}}
                            />
                        </Card>
                        </Col>
                    ))}
                </Row>    
            </Card>
        </React.Fragment>
    )
}

export default Patients
