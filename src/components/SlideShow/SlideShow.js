import React from 'react';
import { Link } from 'react-router-dom';
import './SlideShow.css';

const SlideShow = (props) => {
	const { name, img, body, id } = props.place;
	return (
		<div className="each-slide">
			<div className="row d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
                <div className="col-md-6">
                    <h1 className="text-light">{name}</h1>
                    <p className="text-light">{body}</p>
                    <Link to={`/booking/${id}`}>
                        <button 
                        className="btn btn-warning"
                        >Booking</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" className="w-50"/>
                </div>
			</div>
		</div>
	);
};

export default SlideShow;
