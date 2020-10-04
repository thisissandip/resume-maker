import React from 'react';
import './index.css';
import DisplayResume from './components/DisplayResume';
import Controller from './components/Controller';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<div className='App'>
				<DisplayResume />
				<Controller />
				<Footer />
			</div>
		</>
	);
}
