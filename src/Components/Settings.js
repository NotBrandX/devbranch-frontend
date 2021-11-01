import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../Config';

const Settings = ({ match, setLoggedIn }) => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [avatar, setAvatar] = useState();
	const [password, setPassword] = useState();

	const history = useHistory();
    const token = localStorage.getItem("userId");
    const userInfo = localStorage.getItem('user-info')
    const id = JSON.parse(userInfo).id
    
     console.log(JSON.parse(userInfo).id);

    let headers = {
			'Content-Type': 'application/json',
			'Authorization': `${token}`,
		};
        
        const handleEmailField = (e) => {
            setEmail(e.target.value);
        };
		const handleUsernameField = (e) => {
			setUsername(e.target.value);
		};
		const handleAvatarField = (e) => {
			setAvatar(e.target.value);
		};
		const handlePasswordField = (e) => {
			setPassword(e.target.value);
		};

		// PUT axios() request to edit user info
		const handleSubmit = async (evt, next) => {
			evt.preventDefault();
			try {
				// axios put request to update the info in the backend
				const res = await axios.put(`${API_URL}/users/${id}/`, {
					email: email,
					username: username,
                    password: password,
                    avatar: avatar,
				},
                );
                history.push('/')
			} catch (error) {
                console.log(error);
            }
		};

		const handleDelete = async () => {
			const verify = window.confirm('Are you sure you want to delete?');
			if (verify) {
				try {
					// axios delete request to delete the account in the backend
					const res = await axios.delete(`${API_URL}/users/${id}/`);
					history.push('/');
					localStorage.clear();
					setLoggedIn(false);
				} catch (error) {
					console.log(error);
				}
			}
		};

        const handleCancel = async () => {
            history.push('/profile')
        }

	return (
		<div>
			<h2 className='header'>Update/ Delete Account</h2>
			<form onSubmit={handleSubmit}>
				<label className='label' htmlFor=''>
					email
				</label>
				<input type='text' onChange={handleEmailField} />
				<label className='label' htmlFor=''>
					password
				</label>
				<input type='password' onChange={handlePasswordField} />
				<label className='label' htmlFor=''>
					username
				</label>
				<input type='text' onChange={handleUsernameField} />
				<label className='label' htmlFor=''>
					Avatar
				</label>
				<input type='text' onChange={handleAvatarField} />
				<span>
					<button onClick={handleCancel}>Cancel</button>
					<button type='submit'>Submit</button>
					<button onClick={handleDelete}>Delete</button>
				</span>
			</form>
		</div>
	);
};

export default Settings;
