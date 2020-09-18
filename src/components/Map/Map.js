import React, { useState } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
import { resortData } from "../../fakeData/resortData";

const HotelMap = () => {
	const [gMap, setgMap] = useState(null);
	return (
		<GoogleMap defaultZoom={12} defaultCenter={{ lat: 21.4242785, lng: 91.9315097 }}>
			{resortData.map((resort) => (
				<Marker
					position={{
						lat: resort.cords.lat,
						lng: resort.cords.lng,
					}}
					onClick={() => resort}
				/>
			))}
			{gMap && (
				<InfoWindow>
					<div>Resort details</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};
const WrappedMap = withScriptjs(withGoogleMap(HotelMap));

const Map = () => {
	return (
		<div className="google-map">
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCfwPQAyagBm03Mr9SqnpPRfc1ckebsE8k`}
				loadingElement={<div style={{ height: `702px` }} />}
				containerElement={<div style={{ height: `702px` }} />}
				mapElement={<div style={{ width: "500px", height: "702px", borderRadius: "13px" }} />}
			/>
		</div>
	);
};

export default Map;
