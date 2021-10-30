import React, { useState } from 'react';
import API_URL from '../../Config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = ({setLoggedIn}) => {
	const history = useHistory();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			// axios post request to send credentials to the backend
			const res = await axios.post(`${API_URL}/token/login`, {
				email: email,
				password: password,
			});
			const token = res.data.token;
			localStorage.setItem('token', token);
			setLoggedIn(true);
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	// function to capture email input
	const handleEmailField = (e) => {
		setEmail(e.target.value);
	};

	// function to capture password input -- find a way to combine the two if possible
	const handlePasswordField = (e) => {
		setPassword(e.target.value);
	};

	return (
		<form className='login-form' onSubmit={loginUser}>
			<label className='label' htmlFor=''>
				Email
			</label>
			<input type='text' name='' id='email-field' onChange={handleEmailField} />
			<label className='label' htmlFor=''>
				Password
			</label>
			<input type='password' name='' id='password-field' onChange={handlePasswordField} />
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};

export default LoginForm;
