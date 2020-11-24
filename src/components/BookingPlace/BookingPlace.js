import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import placeInfo from '../../FakeData/placeInfo';
import GoogleMap from '../GoogleMap/GoogleMap';
import './BookingPlace.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';

const ShowPlace = () => {
    const [loggedInUser, setLoggedInUser, booking, setBooking] = useContext(UserContext);
    const [bookingInfo, setBookingInfo] = useState([]);
    
    // LOAD FAKEDATA
	useEffect(() => {
		const allPlace = placeInfo;
		setBookingInfo(allPlace);
    }, []);
    
    //HOTEL ROOM AND PLACE DETAILS
    const selectedPlace = bookingInfo.find(place => place.id === booking.placeId);
	let name, latitude, longitude;
	if (selectedPlace) {
        name = selectedPlace.name;
		latitude = selectedPlace.lat;
        longitude = selectedPlace.lng;
    }
    return (
        <div className="container">
        {booking.isBooking ? 
            <div>
                <div className="border-top">
                <p className="mt-3">252 stays {booking.from} - {booking.to} 3 guests</p>
                <h4 className="my-4"><strong>Stay in {name}</strong></h4>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                <img src={selectedPlace && selectedPlace.description.roomeONe.img} className="card-img img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-normal">{selectedPlace && selectedPlace.description.roomeONe.title}</h5>
                                    <p className="card-text">4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p className="card-text">Wife Air conditioning kitchen</p>
                                    <p className="card-text">Cancellation fexibility available</p>
                                    <p className="card-text"><GradeIcon /> 4.9 (20) $34/night $167 total</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                <img src={selectedPlace && selectedPlace.description.roomeTwo.img} className="card-img img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-normal">{selectedPlace && selectedPlace.description.roomeTwo.title}</h5>
                                    <p className="card-text">4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p className="card-text">Wife Air conditioning kitchen</p>
                                    <p className="card-text">Cancellation fexibility available</p>
                                    <p className="card-text"><GradeIcon /> 4.9 (20) $34/night $167 total</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                <img src={selectedPlace && selectedPlace.description.roomeThree.img} className="card-img img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title font-weight-normal">{selectedPlace && selectedPlace.description.roomeThree.title}</h5>
                                    <p className="card-text">4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p className="card-text">Wife Air conditioning kitchen</p>
                                    <p className="card-text">Cancellation fexibility available</p>
                                    <p className="card-text"><GradeIcon /> 4.9 (20) $34/night $167 total</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 google-map">
                        <GoogleMap lat={latitude} lng={longitude}></GoogleMap>
                    </div>
                </div>
            </div>: <div style={{marginTop: '15%'}}
             className="text-warning text-center"
             ><h1>You didn't booking any place to travel</h1>
             <Link to="/">
                <button className="btn btn-warning"><ArrowBackIcon /> to Booking</button>
             </Link>
             </div>
        }
        </div>
    );
};

export default ShowPlace;