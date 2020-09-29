import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import travelLogo from '../../images/icon/logo.png';

const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-default">
			<div className="container">
				<Link class="navbar-brand" to="/">
					<img src={travelLogo} alt="" />
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<form class="form-inline my-2 my-lg-0 ml-auto">
						<input
							class="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<div class="navbar-nav ml-auto">
						<Link class="nav-link active" to="/">
							News <span class="sr-only">(current)</span>
						</Link>
						<Link class="nav-link" to="/">
							Destination
						</Link>
						<Link class="nav-link" to="/">
							Blog
						</Link>
						<Link class="nav-link" to="/">
							Contact
						</Link>
						<Link class="nav-link" to="/">
							<button className="btn btn-warning">Login</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
