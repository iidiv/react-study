import React from 'react';

export default props => {
    const percent = props.percent;
    return (
        <div className="container page-header">
            <div 
                className="progress progress-bar progress-bar-success progress-bar-striped" 
                role="progressbar" 
                aria-valuenow="40" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{width: percent}}
            >
                <span>{percent}</span>
            </div>
        </div>
    );
}