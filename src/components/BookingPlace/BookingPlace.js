import React from 'react';
import './BookingPlace.css';

const ShowPlace = () => {
    return (
        <div className="container">
            <div className="border-top">
                <p>252 stays Apr 13-17 3 guests</p>
                <h4>Stay in Cox's Bazar</h4>
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
                   <img className="img-fluid google-map" src="https://thefinancialexpress.com.bd/public/uploads/1509263300.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ShowPlace;