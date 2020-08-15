import React from 'react';
import './index.css';

const Section = () => {

    const deleteIcon = () => {
        console.log("deleted");
    }

    return (

        <div className="section">

            <div className="deleteIcon" onClick={deleteIcon}></div>

            <div className="workflowName">Workflow</div>

            <div className="workflowStatus">

                <p className="statusName">completed</p>

                <div className="icon"></div>

            </div>

        </div>
    );

}

export default Section;