import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router-dom';
import placeInfo from '../../FakeData/placeInfo';
import BookingForm from '../BookingForm/BookingForm';

const Booking = () => {
	const [placeData, setPlaceData] = useState([]);
	// LOAD FAKEDATA
	useEffect(() => {
		const allPlace = placeInfo;
		setPlaceData(allPlace);
	}, []);

	// DAYNAMIC ID
	const { placeId } = useParams();

	const selectedPlace = placeData.find((place) => place.id === placeId);
	let name, body, originName;
	if (selectedPlace) {
		name = selectedPlace.name;
		body = selectedPlace.body;
		originName = selectedPlace.origin;
	}

	return (
		<div className="home__background">
			<div className="container">
				<div className="row d-flex align-items-center justify-content-center booking-container">
					<div className="col-md-6">
						<h1 className="text-light booking-title">{name}</h1>
						<p className="text-light">{body}</p>
					</div>
					<div className="col-md-6">
						<BookingForm
							placeId={placeId}
							originName={originName}
							name={name}
						></BookingForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
