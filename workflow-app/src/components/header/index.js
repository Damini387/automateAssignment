import React from 'react';
import './index.css';

const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
};

const Header = (props) => {

    const {showButton} = props;

    return (
        <div className="header">
            <span>flowapp</span>
            { showButton &&
                <button className="logoutBtn" onClick={logout}>Logout</button>
            }

        </div>
    );

}

export default Header;