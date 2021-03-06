import React, { useState, useEffect } from 'react';
import { forIn, isEmpty } from 'lodash';

import CreateSection from '../section/createSection';

const WorkflowCreate = (props) => {

    const [showAddNode, setShowAddNode] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [workFlowName, setWorkFlowName] = useState('');

    const [latestNode, setLatestNode] = useState([]);

    let tasks = {
        completedTask: [],
        inprogressTask: [],
        pendingTask: []
    }

    const [allTasks, setAllTasks] = useState(tasks);

    const renderSections = () => {
        return (
            <div className="sections">
                <CreateSection name="completed" tasks={allTasks.completedTask} moveTask={moveSeletedTask} />
                <CreateSection name="inprogress" tasks={allTasks.inprogressTask} moveTask={moveSeletedTask} />
                <CreateSection name="pending" tasks={allTasks.pendingTask} moveTask={moveSeletedTask} />
            </div>
        )
    }

    const moveSeletedTask = (task) => {

        forIn(allTasks, (value, key) => {

            value.filter((each) => {

                if (each === task) {

                    if (key === "pendingTask") {
                        moveToInprogress(each);
                    }
                    else if (key === "inprogressTask") {
                        moveToComplete(each);
                    }
                }

            });

        });

    }

    const moveToInprogress = (value) => {

        var index = allTasks.pendingTask.indexOf(value);
        if (index !== -1) {
            allTasks.pendingTask.splice(index, 1);
        }

        tasks = {
            completedTask: [
                ...allTasks.completedTask
            ],
            inprogressTask: [
                ...allTasks.inprogressTask,
                value
            ],
            pendingTask: [
                ...allTasks.pendingTask
            ]
        }

        setAllTasks(tasks);

        renderSections();
    }

    const moveToComplete = (value) => {

        var index = allTasks.inprogressTask.indexOf(value);
        if (index !== -1) {
            allTasks.inprogressTask.splice(index, 1);
        }

        tasks = {
            completedTask: [
                ...allTasks.completedTask,
                value
            ],
            inprogressTask: [
                ...allTasks.inprogressTask
            ],
            pendingTask: [
                ...allTasks.pendingTask
            ]
        }

        setAllTasks(tasks);

        renderSections();
    }

    const saveTask = () => {

        if (inputValue.length > 0) {

            tasks = {
                completedTask: [
                    ...allTasks.completedTask
                ],
                inprogressTask: [
                    ...allTasks.inprogressTask
                ],
                pendingTask: [
                    ...allTasks.pendingTask,
                    inputValue
                ]
            }

            setAllTasks(tasks);

            emptyInput();

            renderSections();

            setLatestNode([...latestNode, inputValue]);
        }

    }

    const submit = (e) => {
        if (e.key === "Enter") {

            saveTask();

        }
    }

    const emptyInput = () => {
        setInputValue('');
    }

    const deleteNode = () => {

        const removeLatestNode = latestNode.pop();

        const removeNode = latestNode.slice(0, latestNode.length - 1);

        setLatestNode(removeNode);

        forIn(allTasks, (value, key) => {

            value.filter((each) => {

                if (each === removeLatestNode) {

                    var index = 0;

                    if (key === 'pendingTask') {
                        index = allTasks.pendingTask.indexOf(removeLatestNode);
                        if (index !== -1) {
                            allTasks.pendingTask.splice(index, 1);
                        }
                    }
                    else if (key === 'inprogressTask') {
                        index = allTasks.inprogressTask.indexOf(removeLatestNode);
                        if (index !== -1) {
                            allTasks.inprogressTask.splice(index, 1);
                        }

                    } else {
                        index = allTasks.completedTask.indexOf(removeLatestNode);
                        if (index !== -1) {
                            allTasks.completedTask.splice(index, 1);
                        }
                    }
                }


                tasks = {
                    completedTask: [
                        ...allTasks.completedTask
                    ],
                    inprogressTask: [
                        ...allTasks.inprogressTask
                    ],
                    pendingTask: [
                        ...allTasks.pendingTask
                    ]
                };

                setAllTasks(tasks);


                renderSections();
            })
        });
    }

    const addNodeModal = () => {
        setShowAddNode(true);
    }

    const closeModal = () => {
        setShowAddNode(false);
    }

    const saveWorkflow = () => {
        if (isEmpty(workFlowName)) {
            alert("enter workflow name");
        }
        else if (tasks && isEmpty(latestNode)) {
            alert("please add nodes");
        }
        else if (allTasks) {
            const workflowStatus = getWorkflowStatus();
            props.showHome(workFlowName, workflowStatus);
        }
    };

    const getWorkflowStatus = () => {
        if (allTasks.pendingTask.length > 0) {
            return "pending";
        } else if (allTasks.inprogressTask.length > 0) {
            return "inprogress";
        } else {
            return "completed";
        }
    }

    useEffect(() => {
        renderSections();
    });

    return (
        <div className="createSections">
            <div className="topNav">

                <div className="searchFilter">

                    <input name="workFlowName" value={workFlowName} placeholder="WORKFLOW NAME" className="workFlowName" onChange={(e) => setWorkFlowName(e.currentTarget.value)} />

                </div>

                <div className="buttons">

                    {allTasks.completedTask.length > 0 && <button className="shuffleBtn" disabled>Shuffle</button>}

                    <button className="deleteBtn" onClick={deleteNode}>Delete</button>

                    <button className="nodeBtn" onClick={addNodeModal}>Add Node</button>

                    <button className="saveBtn" onClick={saveWorkflow}>Save</button>

                </div>

            </div>

            <div className="mainContainer">

                {renderSections()}

            </div>

            {showAddNode &&
                <div>
                    <div className="modal">
                        <input name="taskName" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="TASK NAME" className="workFlowName" onKeyPress={submit} />
                        <button className="nodeBtn" onClick={saveTask}>Add Node</button>
                    </div>
                    <div className="overlay" onClick={closeModal}></div>
                </div>
            }
        </div>
    );

}

export default WorkflowCreate;