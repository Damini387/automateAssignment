import React from 'react';

import './index.css';

const Section = (props) => {

    const { workflowName, workflowStatus } = props;

    const deleteIcon = () => {
        console.log("deleted");
    }

    return (

        <div className="section">

            <div className="deleteIcon" onClick={deleteIcon}></div>

            <div className="workflowName">{workflowName}</div>

            <div className="workflowStatus">

                <p className="statusName">{workflowStatus}</p>

                <div className={`icon ${workflowStatus}`}>
                    <div className="checkMark"></div>
                </div>

            </div>

        </div>
    );

}

export default Section;