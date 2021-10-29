import React from 'react'
import { Alert, Divider } from 'antd';

const Requests = () => {
    return (
        <React.Fragment>
            <a href="#" style={{float:'right', textDecoration:'underline', textAlign:'center'}}> 
                <h3 style={{color: '#1756c2'}}>5</h3>
                View All
            </a>
            <Divider style={{border:'none'}} />
            <br />
            <Alert
                message="John Doe"
                description="12/05/2021 | 03:45 PM"
                type="info"
                />
            <br />
            <Alert
                message="John Doe"
                description="12/05/2021 | 03:45 PM"
                type="info"
            />      
            <br />
        </React.Fragment>
    )
}

export default Requests
