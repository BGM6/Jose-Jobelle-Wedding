import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './layout/Header';
import Landing from './layout/Landing';
import Footer from './layout/Footer';
//Links
import OurStory from './OurStory';
import Photos from './Photos';
import WhereWhen from './WhereWhen';
import Gifts from './Gifts';
import Groomsmen from '../components/entourage/Groomsmen';
import Bridesmaid from '../components/entourage/Bridesmaid';

const App = () => {
	return (
		<div>
			<Router>
				<Header/>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/ourstory" component={OurStory}/>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
					<Route exact path="/photos" component={Photos}/>
				</div>
				<Route exact path="/gifts" component={Gifts}/>
				<Route exact path="/details" component={WhereWhen}/>
				<Route exact path="/groomsmen" component={Groomsmen}/>
				<Route exact path="/bridesmaid" component={Bridesmaid}/>
			</Router>
			<Footer/>
		</div>
	)
		;
};

export default App;