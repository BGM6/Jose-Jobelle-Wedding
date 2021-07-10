import React from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import Header from './layout/Header';
import Landing from './layout/Landing';
import Footer from './layout/Footer';

const App = () => {
	return (
		<div>
			<Header/>
			<Landing/>
			<Footer/>
		</div>
	);
};

export default App;