import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import placeInfo from '../../FakeData/placeInfo';
import GoogleMap from '../GoogleMap/GoogleMap';
import './BookingPlace.css';

const ShowPlace = () => {
    const [loggedInUser, setLoggedInUser, booking, setBooking] = useContext(UserContext);
    const [bookingInfo, setBookingInfo] = useState([]);
    
    // LOAD FAKEDATA
	useEffect(() => {
		const allPlace = placeInfo;
		setBookingInfo(allPlace);
    }, []);
    
    const selectedPlace = bookingInfo.find(place => place.id === booking.placeId);
    console.log('Yes',selectedPlace);
	let name, latitude, longitude;
	if (selectedPlace) {
        name = selectedPlace.name;
		latitude = selectedPlace.lat;
		longitude = selectedPlace.lng;
	}

    return (
        <div className="container">
            <div className="border-top">
                <p>252 stays {booking.from} - {booking.to} 3 guests</p>
                <h4>Stay in {name}</h4>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center mt-4">
                        <img className="w-50  booking-place-image" src="https://cdn.vox-cdn.com/thumbor/-K0VWk5lzMODm0IdCIhGYC40ahI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10686791/Hilton_Panama_Alienware_Room_Gaming_hotel_room_12.jpg" alt=""/>
                        <div>
                            <h5>Lorem ipsum dolor sit.</h5>
                            <p className="text-secondary">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-secondary">Wife Air conditioning kitchen</p>
                            <p className="text-secondary">Cancellation fexibility available</p>
                            <p>⭐ 4.9 (20) $34/night $167 total</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <img className="w-50  booking-place-image" src="https://st.hzcdn.com/simgs/1131a6990e8f8fcb_14-3211/home-design.jpg" alt=""/>
                        <div>
                            <h5>Lorem ipsum dolor sit.</h5>
                            <p className="text-secondary">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-secondary">Wife Air conditioning kitchen</p>
                            <p className="text-secondary">Cancellation fexibility available</p>
                            <p>⭐ 4.9 (20) $34/night $167 total</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <img className="w-50  booking-place-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpNI5uZKbs0w0_k_PU790Q21Q59NAUlcZZ5Q&usqp=CAU" alt=""/>
                        <div>
                            <h5>Lorem ipsum dolor sit.</h5>
                            <p className="text-secondary">4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className="text-secondary">Wife Air conditioning kitchen</p>
                            <p className="text-secondary">Cancellation fexibility available</p>
                            <p>⭐ 4.9 (20) $34/night $167 total</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                   <GoogleMap lat={latitude} lng={longitude}></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default ShowPlace;