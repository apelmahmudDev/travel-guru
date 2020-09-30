import React from 'react';
import { Link } from 'react-router-dom';
import './SlideShow.css';
import { ArrowForward } from '@material-ui/icons';

const SlideShow = (props) => {
	const { name, img, body, id } = props.place;
	return (
		<div className="each-slide">
			<div
				className="row d-flex align-items-center"
				style={{ height: '100vh' }}
			>
				<div className="col-md-6">
					<h1 className="text-light slideshow-title">{name}</h1>
					<p className="text-light">{body}</p>
					<Link to={`/booking/${id}`}>
						<button className="btn main-btn">Booking <ArrowForward /></button>
					</Link>
				</div>
				<div className="col-md-6 text-center">
					<img src={img} alt="" className="w-50 slideshow-img" />
				</div>
			</div>
		</div>
	);
};

export default SlideShow;
