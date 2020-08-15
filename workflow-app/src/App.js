import React from 'react';

import Header from './components/header';
import Login from './components/login';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header showButton={false}/>
			<Login />
		</div>
	);
}

export default App;
