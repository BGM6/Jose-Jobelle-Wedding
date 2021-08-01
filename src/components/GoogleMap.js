import '../components/css/map.css';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';


const GoogleMap = ({location, zoomLevel}) => {

	return (
		<div style={{height: '75vh', width: '100%', marginTop: '4rem'}}
				 className="google-map"
		>
			<GoogleMapReact
				bootstrapURLKeys={{key: 'AIzaSyC459_w1PrrsvGTANOX7xx5Uan3wh4Hrmk'}}
				defaultCenter={location}
				defaultZoom={zoomLevel}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;