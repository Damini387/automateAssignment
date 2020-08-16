import React, { useState, useEffect } from 'react';

import CreateSection from '../section/createSection';

import './index.css';

const WorkflowCreate = () => {

    const [showAddNode, setShowAddNode] = useState(false);

    const [inputValue, setInputValue] = useState('');

    let tasks = {
        completedTask: ["test123", "tdaminn"],
        inprogressTask: ["red"],
        pendingTask: ["damini232"]
    }

    const [allTasks, setAllTasks] = useState(tasks);

    const renderSections = () => {
        return (
            <div className="sections">
                <CreateSection name="completed" tasks={tasks.completedTask} />
                <CreateSection name="inprogress" tasks={tasks.inprogressTask} />
                <CreateSection name="pending" tasks={allTasks.pendingTask} />
            </div>
        )
    }

    const saveTask = () => {

        tasks = {
            ...tasks,
            pendingTask: [
                ...allTasks.pendingTask,
                inputValue
            ]
        }

        setAllTasks(tasks);

        emptyInput();

        renderSections();        

    }

    const submit = (e) => {
        if (e.key === "Enter") {

            saveTask();

        }
    }

    const emptyInput = () => {
        setInputValue('');
    }

    const addNodeModal = () => {
        setShowAddNode(true);
    }

    const closeModal = () => {
        setShowAddNode(false);
    }

    useEffect(() => {
        renderSections();
    });

    return (
        <div className="createSections">
            <div className="topNav">

                <div className="searchFilter">

                    <input name="workflowName" placeholder="WORKFLOW NAME" className="workFlowName" />

                </div>

                <div className="buttons">

                    <button className="shuffleBtn">Shuffle</button>

                    <button className="deleteBtn">Delete</button>

                    <button className="nodeBtn" onClick={addNodeModal}>Add Node</button>

                    <button className="saveBtn">Save</button>

                </div>

            </div>

            <div className="mainContainer">

                {renderSections()}

            </div>

            {showAddNode &&
                <div>
                    <div className="modal">
                        <input name="taskName"value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="TASK NAME" className="workFlowName" onKeyPress={submit} />
                        <button className="nodeBtn" onClick={saveTask}>Add Node</button>
                    </div>
                    <div className="overlay" onClick={closeModal}></div>
                </div>
            }
        </div>
    );

}

export default WorkflowCreate;