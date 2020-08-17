import React from 'react';

const CreateSection = (props) => {

    const { name, tasks } = props;

    const renderTasks = () => {

        return tasks && tasks.map((task, index) => {
            return <div className="workflowName" key={index} taskname={task} onClick={(e)=>selectedTask(e)}>{task}</div>
        });

    };

    const selectedTask = (e) => {

        const task = e.target.getAttribute("taskname");

        // if(e.target.classList.contains("selected")) {
        //     e.target.classList.remove("selected");
        //     return;
        // }

        // e.target.classList.add("selected");

        props.moveTask(task);

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