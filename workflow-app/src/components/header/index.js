import React, { useReducer, useState, useEffect } from 'react';

import showLogoutButton from '../../store/reducers';

import './index.css';

const Header = (props) => {

    const { showBtn } = props;

    const [hideLogout, dispatch] = useReducer(showLogoutButton, []);

    const [showButton, setShowButton] = useState(showBtn);

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        dispatch({ type: 'HIDE_LOGOUT', payload: { hideLogoutButton: false, showLoginPage: true } });
        setShowButton(hideLogout.showLogoutButton);
        props.showLoginPage();
    };

    useEffect(() => {
        setShowButton(showBtn);
    }, [showBtn]);

    return (
        <div className="header">
            <span>flowapp</span>
            {showButton &&
                <button className="logoutBtn" onClick={logout}>Logout</button>
            }

        </div>
    );

}

export default Header;