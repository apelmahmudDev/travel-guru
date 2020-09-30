import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import travelLogo from '../../images/icon/logo.png';
import { UserContext } from '../../App';
import FaceIcon from '@material-ui/icons/Face';

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-default">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={travelLogo} alt="" />
				</Link>
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
					<form className="form-inline my-2 my-lg-0 ml-auto">
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
						<Link className="nav-link active" to="/news">
							News <span className="sr-only">(current)</span>
						</Link>
						<Link className="nav-link" to="/bookingPlace">
							Destination
						</Link>
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
						<Link className="nav-link" to="/contact">
							Contact
						</Link>
						{loggedInUser.isSignedIn ? <p className="mt-2"><FaceIcon /><strong>{loggedInUser.name}</strong></p> :
						 <Link className="nav-link login-link" to="/login">Login</Link>}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
