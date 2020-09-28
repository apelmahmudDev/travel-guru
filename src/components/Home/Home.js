import React, { useEffect, useState } from 'react';
import SlideShow from '../SlideShow/SlideShow';
import './Home.css';
import placeInfo from '../../FakeData/placeInfo';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
	const [placeData, setPlaceData] = useState([]);

	// LOAD FAKEDATA
	useEffect(() => {
		const allPlace = placeInfo;
		setPlaceData(allPlace);
	}, []);

	return (
		<div className="home__background">
			{/* SLIDE SHOW */}
			<div className="container">
				<div className="slide-container">
					<Slide>
						{
							placeData.map(place => <SlideShow 
								place={place}
								key={place.id}
								></SlideShow>)
						}
					</Slide>
				</div>
			</div>
		</div>
	);
};

export default Home;
