import React, { Fragment, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import WorkflowCreate from './create';
import Section from '../section';

const WorkflowHome = () => {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [inputValue, setInputValue] = useState('');

    let workflows = [
        {
            workflowName: "test123",
            workflowStatus: "completed"
        },
        {
            workflowName: "damini",
            workflowStatus: "pending"
        }
    ];

    const [allWorkFlows, setAllWorkFlows] = useState(workflows);

    useEffect(() => {
        renderSections();
    });

    const showHome = (workflowName, workflowStatus) => {

        workflows = [
            ...allWorkFlows,
            { workflowName: workflowName, workflowStatus: workflowStatus }
        ];

        setAllWorkFlows(workflows);

        setShowCreateModal(false);
    }

    const renderSections = () => {

        if (inputValue && !isEmpty(inputValue)) {

            return allWorkFlows && allWorkFlows.map((workflow, index) => {
                return inputValue && workflow.workflowName.includes(inputValue) && <Section key={index} workflowName={workflow.workflowName} workflowStatus={workflow.workflowStatus} deleteSection={(e) => deleteSection(e)} />
            });

        }

        else {

            return allWorkFlows && allWorkFlows.map((workflow, index) => {
                return <Section key={index} workflowName={workflow.workflowName} workflowStatus={workflow.workflowStatus} deleteSection={(e) => deleteSection(e)} />
            });

        }

    };

    const deleteSection = (e) => {

        // e.currentTarget.parentElement.getAttribute("key");

        // e.currentTarget.parentElement.remove();

        console.log("pending functionality");


    };

    const showModal = () => {
        setShowCreateModal(true);
    };

    const searchWorkflow = (e) => {
        const val = e.currentTarget.value;
        setInputValue(val);

        renderSections();

    };

    return (

        <Fragment>

            {!showCreateModal &&

                <div>
                    <div className="topNav">

                        <div className="searchFilter">

                            <input name="search" value={inputValue} placeholder="Search Workflows" className="searchBtn" onChange={searchWorkflow} />

                            <button className="filterBtn" disabled>Filter</button>

                        </div>

                        <button className="createBtn" onClick={showModal}>Create Workflow</button>

                    </div>

                    <div className="mainContainer">

                        {renderSections()}

                    </div>
                </div>
            }

            {
                showCreateModal && <WorkflowCreate showHome={showHome} />
            }

        </Fragment>

    );

}

export default WorkflowHome;