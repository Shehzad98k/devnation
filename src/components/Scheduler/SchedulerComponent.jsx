import React, { useState } from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';

const SchedulerComponent = () => {
    const [state, setState] = useState({
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
        })

    //change on set
    const onSelect = value => {
        setState({
          value,
          selectedValue: value,
        });
    }

    const onPanelChange = value => {
        setState({ value });
      };

    const { value, selectedValue } = state;

    
    return (
        <React.Fragment>
            <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </React.Fragment>
    )
}

export default SchedulerComponent
