import React from 'react';
import './SlideShow.css';
import sliderImg1 from '../../images/image/sundorban.png';
import sliderImg2 from '../../images/image/sajek.png';
import sliderImg3 from '../../images/image/srimongol.png';

const SlideShow = () => {
	return (
		<div className="container">
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row d-flex align-items-center">
							<div className="col-md-6">
								<h1 className="text-light">Cox's Bazar</h1>
								<p className="text-light">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Fugiat voluptatum impedit modi itaque ullam corporis error
									reprehenderit sequi distinctio, ab quo nihil amet sunt
									voluptates facere, pariatur et corrupti quis.
								</p>
								<button className="btn btn-warning">Booking</button>
							</div>
							<div className="col-md-6">
                                <img className="w-50" src={sliderImg3} alt="" />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex align-items-center">
							<div className="col-md-6">
								<h1 className="text-light">Cox's Bazar</h1>
								<p className="text-light">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Fugiat voluptatum impedit modi itaque ullam corporis error
									reprehenderit sequi distinctio, ab quo nihil amet sunt
									voluptates facere, pariatur et corrupti quis.
								</p>
								<button className="btn btn-warning">Booking</button>
							</div>
							<div className="col-md-6">
								<img className="w-50" src={sliderImg1} alt="" />
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex align-items-center">
							<div className="col-md-6">
								<h1 className="text-light">Cox's Bazar</h1>
								<p className="text-light">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Fugiat voluptatum impedit modi itaque ullam corporis error
									reprehenderit sequi distinctio, ab quo nihil amet sunt
									voluptates facere, pariatur et corrupti quis.
								</p>
								<button className="btn btn-warning">Booking</button>
							</div>
							<div className="col-md-6">
								<img className="w-50" src={sliderImg2} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SlideShow;
