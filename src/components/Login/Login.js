import React, { useState } from 'react';
import './Login.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import googleIcon from '../../images/icon/google.png';
import facebookIcon from '../../images/icon/fb.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		isSignedIn: false,
		name: '',
		lname: '',
		email: '',
		password: '',
		confirmPass: '',
		photo: '',
		error: '',
		success: false,
	});
	//GOOGLE SIGN IN
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	const handleSignWithGoogle = () => {
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((res) => {
				const { displayName, email, photoURL } = res.user;
				const newUserInfo = {
					isSignedIn: true,
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(newUserInfo);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	//SIGN IN WITH FACEBOOK
	const handleFacebookSignIn = () => {
		const fbProvider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(fbProvider)
			.then((res) => {
				const { displayName, email, photoURL } = res.user;
				const newUserInfo = {
					isSignedIn: true,
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(newUserInfo);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	//CUSTOM LOGIN FORM VALIDATION
	const handleBlur = (e) => {
		let isFieldValid = true;
		if (e.target.name === 'email') {
			isFieldValid = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value);
		}
		if (e.target.name === 'password') {
			const isValidPassword = e.target.value.length > 6;
			const hasNumber = /\d/g.test(e.target.value);
			isFieldValid = isValidPassword && hasNumber;
		}

		if (isFieldValid) {
			const newUserInfo = { ...user };
			newUserInfo[e.target.name] = e.target.value;
			setUser(newUserInfo);
		}
	};
	//CUSTOM lOGIN FORM SUBMIT
	const handleSubmit = (e) => {
		if (newUser && user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = true;
					newUserInfo.error = '';
					newUserInfo.success = true;
					updateUser(user.name, user.lname);
					setUser(newUserInfo);
				})
				.catch((err) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = false;
					newUserInfo.error = err.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		if (!newUser && user.email && user.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const newUserInfo = { ...user };
					newUserInfo.isSignedIn = true;
					newUserInfo.error = '';
					newUserInfo.success = true;
					setUser(newUserInfo);
				})
				.catch((err) => {
					const newUserInfo = { ...user };
					newUserInfo.error = err.message;
					newUserInfo.success = false;
					setUser(newUserInfo);
				});
		}
		e.preventDefault();
	};
	//UPDATE NAME
	const updateUser = (name, lname) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: name,
				lastName: lname,
			})
			.then((res) => {
				console.log('User name update successfully');
			})
			.catch((err) => {
				console.log('User name update failed');
			});
	};

	//SIGN OUT
	const handleGoogleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then((res) => {
				const newUserInfo = {
					isSignedIn: false,
					name: '',
					email: '',
					photo: '',
				};
				setUser(newUserInfo);
			})
			.catch((err) => {
				// An error happened.
				console.log(err.message);
			});
	};
	return (
		<div className="container">
			{user.isSignedIn && <h3>User name: {user.name}</h3>}
			{user.isSignedIn && <h4>Email: {user.email}</h4>}
			{user.isSignedIn && <p>Last Name: {user.lname}</p>}

			<div className="col-md-5 login-form">
				<h3>Create an account</h3>
				{/* CUSTOM LOGIN FORM */}
				<form className="form" onSubmit={handleSubmit}>
					{newUser && (
						<input
							onBlur={handleBlur}
							type="text"
							name="name"
							placeholder="First Name"
							className="form-control"
							required
						/>
					)}
					{newUser && (
						<input
							onBlur={handleBlur}
							type="text"
							name="lname"
							placeholder="Last Name"
							className="form-control"
							required
						/>
					)}
					<input
						onBlur={handleBlur}
						type="email"
						name="email"
						placeholder="Email"
						className="form-control"
						required
					/>
					<input
						onBlur={handleBlur}
						type="password"
						name="password"
						placeholder="Password"
						className="form-control"
						required
					/>
					{newUser && (
						<input
							onBlur={handleBlur}
							type="password"
							name="confirmPass"
							placeholder="Confirm Password"
							className="form-control"
							required
						/>
					)}
					<input
						type="submit"
						value="Create an Account"
						className="form-control bg-warning"
					/>
				</form>

				<p className="text-danger">{user.error}</p>
				{user.success && (
					<p className="text-success text-center">
						Account {newUser ? 'created' : 'login'} successfully
					</p>
				)}
				<p className="text-center">
					{newUser ? 'Already have an account' : 'Do not have an account'}?{' '}
					<u
						onClick={() => setNewUser(!newUser)}
						className="text-warning text-underline"
						style={{ cursor: 'pointer' }}
					>
						{newUser ? 'Login' : 'Create an account'}
					</u>
				</p>
			</div>
			<div className="text-center">
				{/* SIGN WITH FACEBOOK */}
				<button className="btn sign-btn" onClick={handleFacebookSignIn}>
                    <img src={facebookIcon} alt=""/>
                    Continue with Facebook
                    </button>
				<br />
				{/* SIGN WITH GOOGLE */}
				<button className="btn sign-btn" onClick={handleSignWithGoogle}>
                    <img src={googleIcon} alt=""/>
                    Continue with Google
                </button>
			</div>
		</div>
	);
};

export default Login;
