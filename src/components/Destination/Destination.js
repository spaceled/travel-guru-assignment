import React from "react";
import { resortData } from "../../fakeData/resortData";
import Resort from "../Resort/Resort";
import Map from "../Map/Map";

const Destination = () => {
	return (
		<div className="cox-destination container">
			<div className="section-top text-left pt-3">
				<h4>252 stays Apr 13-17 3 guests</h4>
				<h3>Stay in Cox’s Bazar</h3>
			</div>
			<div className="row">
				<div className="col-lg-7">
					<div className="hotel-card-wrap mb-lg-0 mb-4">
						{resortData.map((resort) => (
							<Resort hotel={resort}></Resort>
						))}
					</div>
				</div>
				<div className="col-lg-5">
					<Map></Map>
				</div>
			</div>
		</div>
	);
};

export default Destination;
