import '../css/style.css'
import '../css/mobile.css'
import React from 'react';
import background from '../img/landing.jpg'

const Landing = () => {
	return(
		<div className="background-image"
		style={{
			backgroundImage:`url(${background})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '100vh'
		}}
		>
		</div>
	);
}

export default Landing;