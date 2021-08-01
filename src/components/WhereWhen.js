import React from 'react';
import GoogleMap from './GoogleMap';

const WhereWhen = () => {

	const location = {
		address: '8500 Clubhouse Dr., Pleasanton, CA 94566',
		lat: 37.62,
		lng: -121.85
	};

	return (
		<div>
			<GoogleMap
				location={location}
				zoomLevel={11}
			/>
		</div>
	);
};

export default WhereWhen;