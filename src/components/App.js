import React, {Fragment} from 'react';
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
		<Fragment>
				<Router>
					<Header/>
					<Route exact path="/" component={Landing}/>
					<div style={{padding: '1rem'}}>
						<Route exact path="/ourstory" component={OurStory}/>
					</div>
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
		</Fragment>
	)
		;
};

export default App;