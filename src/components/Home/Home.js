import React from 'react';
import Header from '../Header/Header';
import SlideShow from '../SlideShow/SlideShow';
import './Home.css';
const Home = () => {
	return (
		<div className="home__background">
			<Header></Header>
			<SlideShow></SlideShow>
		</div>
	);
};

export default Home;
