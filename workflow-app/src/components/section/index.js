import React from 'react';

import './index.css';

const Section = (props) => {

    const { name } = props;

    const deleteIcon = () => {
        console.log("deleted");
    }

    return (

        <div className="section">

            <div className="deleteIcon" onClick={deleteIcon}></div>

            <div className="workflowName">Workflow</div>

            <div className="workflowStatus">

                <p className="statusName">completed</p>

                <div className={`icon ${name}`}>
                    <div className="checkMark"></div>
                </div>

            </div>

        </div>
    );

}

export default Section;