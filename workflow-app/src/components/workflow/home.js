import React, { Fragment, useState } from 'react';

import Section from '../section';

import './index.css';
import WorkflowCreate from './create';

const WorkflowHome = () => {

    const [showCreateModal, setShowCreateModal] = useState(false);

    const renderSections = () => {

        return <Section />
    };

    const showModal = () => {
        setShowCreateModal(true);
    }

    return (

        <Fragment>

            {!showCreateModal &&

                <div>
                    <div className="topNav">

                        <div className="searchFilter">

                            <input name="search" placeholder="Search Workflows" className="searchBtn" />

                            <button className="filterBtn">Filter</button>

                        </div>

                        <button className="createBtn" onClick={showModal}>Create Workflow</button>

                    </div>

                    <div className="mainContainer">

                        {renderSections()}

                    </div>
                </div>
            }

            {
                showCreateModal && <WorkflowCreate />
            }

        </Fragment>

    );

}

export default WorkflowHome;