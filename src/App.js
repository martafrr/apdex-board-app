import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

const App = () => <div className="app-container">
	<Route path="/" exact component={HomePage} />
</div>;

export default App;
