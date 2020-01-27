import React from 'react';
import { Route } from 'react-router-dom';
import { StyleRoot } from 'radium';

import Header from './components/Header';
import HomePage from './components/HomePage';
import HostCard from './components/HostCard';
import './App.css';

const App = () => (
	<StyleRoot>
		<div className="app-container">
			<Header />
			<Route path='/' exact component={HomePage} />
			<Route path='/:host_name' component={HostCard} />
		</div>
	</StyleRoot>
);

export default App;
