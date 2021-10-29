import React from 'react'
import { Table, Tag, Space } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import './Appointment.css';

const columns = [
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
            <VideoCameraOutlined className="appointment-action" />
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      patient: 'Dave Johnson',
      reason: 'Neck Wound',
      time: '4:09 PM Park',
    },
    {
      key: '2',
      patient: 'Dave Johnson',
      reason: 'Neck Wound',
      time: '4:09 PM',
    },
    {
      key: '3',
      patient: 'Dave Johnson',
      reason: 'Neck Wound',
      time: '4:09 PM',
    },
  ];
  
const Appointments = () => {
    return (
        <React.Fragment>
            <Table columns={columns} dataSource={data} />
        </React.Fragment>
    )
}

export default Appointments
