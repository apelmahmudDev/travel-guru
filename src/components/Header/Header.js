import React from 'react';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-ligth bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<div className="navbar-nav ml-auto">
						<a className="nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-link" href="#">
							Features
						</a>
						<a className="nav-link" href="#">
							Pricing
						</a>
						<a
							className="nav-link disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true"
						>
							Disabled
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
