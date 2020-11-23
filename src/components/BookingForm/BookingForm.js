import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const BookingForm = ({ placeId, originName, name }) => {
	const [loggedInUser, setLoggedInUser, booking, setBooking] = useContext(UserContext);

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
		<div className="booking-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="origin">Origin</label>
				<input
					name="originName"
					defaultValue={originName}
					ref={register}
					className="form-control"
				/>
				<label htmlFor="destination">Destination</label>
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
					<Link to="/bookingPlace">
						<button className="btn travel-btn">Travel your place</button>
					</Link>
				) : (
					<input
						type="submit"
						value="Start Booking"
						className="form-control booking-btn"
					/>
				)}
			</form>
		</div>
	);
};

export default BookingForm;
