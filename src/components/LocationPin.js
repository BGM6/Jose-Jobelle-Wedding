import '../components/css/map.css'
import React from 'react';
// import locationIcon from '@iconify/icons-mdi/map-marker';
import {Icon} from '@iconify/react';

// const marker = <i className="fas fa-map-marker-alt"/>

const LocationPin = ({text}) => (
	<div className="pin">
		<Icon icon='' className="pin-icon"/>
		<p className="pin-text">{text}</p>
	</div>
);

export default LocationPin;