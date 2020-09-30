import React, { useContext, useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import placeInfo from '../../FakeData/placeInfo';
import { UserContext } from '../../App';

const Booking = () => {
	const [loggedInUser, setLoggedInUser, booking, setBooking] = useContext(UserContext);
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

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		const { originName, destination, from, to } = data;
		const getBookingInfo = {
            isBooking: true,
            placeId: placeId,
			originName: originName,
			destination: destination,
			from: from,
			to: to,
		};
		setBooking(getBookingInfo);
	};

	return (
		<div className="home__background">
			<div className="container">
				<div
					className="row d-flex align-items-center justify-content-center"
					style={{ height: '100vh' }}
				>
					<div className="col-md-6">
						<h1 className="text-light booking-title">{name}</h1>
						<p className="text-light">{body}</p>
					</div>
					<div className="col-md-6">
						<div className="booking-form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<label for="origin">Origin</label>
								<input
									name="originName"
									defaultValue={originName}
									ref={register}
									className="form-control"
								/>
								<label for="destination">Destination</label>
								<input
									name="destination"
									defaultValue={name}
									ref={register({ required: true })}
									className="form-control"
								/>
								{errors.destination && <span>This field is required</span>}
								{/* DATE PICKER */}
								<div className="date-picker-wrap">
									<div className="date-picker">
										<label>From</label>
										<input
											type="date"
											name="from"
											defaultValue="Cox's Bazar"
											ref={register({ required: true })}
										/>
									</div>
									<div className="date-picker">
										<label>To</label>
										<input
											type="date"
											name="to"
											defaultValue="Cox's Bazar"
											ref={register({ required: true })}
										/>
									</div>
								</div>
								{booking.isBooking ? (
									<Link to="/bookingPlace"><button className="btn travel-btn">Travel your place</button></Link>
								) : (
									<input type="submit" value="Start Booking" className="form-control booking-btn"/>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
