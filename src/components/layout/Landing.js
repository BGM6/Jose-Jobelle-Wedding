import '../css/style.css';
import '../css/mobile.css';
import React from 'react';
// import background from '../img/landing.jpg';
import Timer from '../Timer';

const Landing = () => {
	return (
		<div className="background-image"
				 style={{
					 backgroundImage: `url("https://res.cloudinary.com/dncx7of7k/image/upload/v1636855250/JoseAndJobelleWedding/DSCF2560_dyuxsw.jpg")`,
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