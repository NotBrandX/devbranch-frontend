import React, {useState} from 'react';
import {useHistory} from 'react-router';
import API_URL from '../../Config'
import axios from 'axios';

const Signup = (setLoggedIn) => {
    const [username, setUserName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [cPass, setCPass] = useState();

	const history = useHistory();
	// function to allow the user to login
	const createUser = async (e) => {
		e.preventDefault();
		try {
			// Check if password match confirm password
			if (password === cPass) {
				// axios post request to send credentials to the backend
				const res = await axios.post(`${API_URL}/users`, {
					username: username,
					email: email,
					password: password,
				});
				history.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

		// function to capture username input
		const handleUserNameField = (e) => {
			setUserName(e.target.value);
		};
		// function to capture email input
		const handleEmailField = (e) => {
			setEmail(e.target.value);
		};
		// function to capture password input -- find a way to combine the two if possible
		const handlePasswordField = (e) => {
			setPassword(e.target.value);
		};
		const handleCPasswordField = (e) => {
			setCPass(e.target.value);
		};

		return (
			<form onSubmit={createUser}>
				<label className='label' htmlFor=''>
					Username
				</label>
				<input type='text' name='' id='username' onChange={handleUserNameField} />
				<label className='label' htmlFor=''>
					Email
				</label>
				<input type='text' name='' id='email' onChange={handleEmailField} />
				<label className='label' htmlFor=''>
					Password
				</label>
				<input
					type='password'
					name=''
					id='password'
					onChange={handlePasswordField}
				/>
				<label className='label' htmlFor=''>
					Confirm Password
				</label>
				<input
					type='password'
					name=''
					id='confirm-password'
					onChange={handleCPasswordField}
				/>
				<div>
					<button type='submit'>Create Account</button>
				</div>
			</form>
		);
}

export default Signup;