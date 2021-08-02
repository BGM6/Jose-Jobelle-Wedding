import '../components/css/map.css';
import React from 'react';
import {Icon} from '@iconify/react';


const LocationPin = ({text}) => {

	return (
		<div className="pin">
			<Icon icon='' className="pin-icon"/>
			<i className="fas fa-map-marker-alt"
				 style={{fontSize: '3rem', marginRight: '2px'}}
			/>
			<p className="pin-text">{text}</p>
		</div>
	);
};

export default LocationPin;