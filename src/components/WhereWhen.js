import React from 'react';
import GoogleMap from './GoogleMap';

const WhereWhen = () => {
	const location = {
		address: '8500 Clubhouse Dr., Pleasanton, CA 94566',
		lat: 37.626621147983094,
		lng: -121.86063191569167
	};

	return (
		<div className="map-container">
			<GoogleMap
				location={location}
				zoomLevel={11}
			/>
		</div>
	);
};

export default WhereWhen;