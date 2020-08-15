import React, { Fragment } from 'react';

import Section from '../section';

import './index.css';

const WorkflowHome = () => {

    const renderSections = () => {

        return <Section />
    };

    return (

        <Fragment>
            <div className="topNav">

                <div className="searchFilter">

                    <input name="search" placeholder="Search Workflows" className="searchBtn" />

                    <button className="filterBtn">Filter</button>

                </div>

                <button className="createBtn">Create Workflow</button>

            </div>

            <div className="mainContainer">

                {renderSections()}

            </div>
        </Fragment>

    );

}

export default WorkflowHome;