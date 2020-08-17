import React from 'react';

const Section = (props) => {

    const { workflowName, workflowStatus } = props;

    const deleteIcon = (e) => {
        props.deleteSection(e);
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