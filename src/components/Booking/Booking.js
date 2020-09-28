import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import placeInfo from '../../FakeData/placeInfo';

const Booking = () => {
    const [placeData, setPlaceData] = useState([]);

	// LOAD FAKEDATA
	useEffect(() => {
		const allPlace = placeInfo;
		setPlaceData(allPlace);
    }, []);

    // DAYNAMIC ID
    const { placeId } = useParams();

    const selectedPlace = placeData.find(place => place.id === placeId);
    let name, body, originName;
    if(selectedPlace){
        name = selectedPlace.name;
        body = selectedPlace.body;
        originName = selectedPlace.origin;
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="home__background">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
                    <div className="col-md-6">
                        <h1 className="text-light">{name}</h1>
                        <p className="text-light">{body}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label for="origin">Origin</label>
                            <input name="oringname" defaultValue={originName} ref={register}  className="form-control"/>
                            <label for="destination">Destination</label>
                            <input name="destination" defaultValue={name} ref={register({ required: true })} className="form-control" />
                            {errors.destination && <span>This field is required</span>}
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <label>From</label>
                                <input type="date" name="from" defaultValue="Cox's Bazar" ref={register({ required: true })} />
                                <label>To</label>
                                <input type="date" name="to" defaultValue="Cox's Bazar" ref={register({ required: true })}/>
                            </div>
                            <input type="submit" className="form-control"/>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;