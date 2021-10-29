import React from 'react'

const SummaryItem = (props) => {
    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            <div className="summary-item" style={{borderColor:props.color}}>
                <h2 style={{color:props.color}}>{props.num}</h2>
            </div>
        </React.Fragment>
    )
}

export default SummaryItem
