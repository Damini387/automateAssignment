import React from 'react';

import './index.css';

const CreateSection = (props) => {

    const { name, tasks } = props;

    const renderTasks = () => {

        return tasks.map((task, index) => {
            return <div className="workflowName" key={index}>{task}</div>
        });

    };

    return (

        <div className="section createSection">

            <div className={`icon ${name}`}>
                <div className="checkMark"></div>
            </div>

            {renderTasks()}

        </div>
    );

}

export default CreateSection;