import '../css/style.css';
import '../css/mobile.css';
import React from 'react';
// import background from '../img/landing.jpg';
import Timer from '../Timer';

const Landing = () => {
	return (
		<div className="background-image"
				 style={{
					 backgroundImage: `url("https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")`,
					 backgroundRepeat: 'no-repeat',
					 backgroundSize: 'cover',
					 height: '100vh',
					 opacity: 0.9
				 }}
		>
			<Timer/>
		</div>
	);
};

export default Landing;