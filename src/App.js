import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StyleRoot } from 'radium';

import Header from './components/Header';
import HomePage from './components/HomePage';
import HostPage from './components/HostPage';
import './App.css';

const App = () => (
	<StyleRoot>
		<BrowserRouter>
			<div className="app-container">
				<Header />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/:host_name' component={HostPage} />
				</Switch>
			</div>
		</BrowserRouter>
	</StyleRoot>
);

export default App;
