import React from 'react'
import { Calendar } from 'antd';
import './Calender.css';

const Calender = () => {
    const onPanelChange = (value, mode) => {
        console.log(value, mode);
      }
      
    return (
        <React.Fragment>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        </React.Fragment>
    )
}

export default Calender
