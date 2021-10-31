import React, {useState, useEffect} from 'react';
import Post from './Post'
import axios from 'axios';
import API_URL from '../Config'
import { TextField, Box, Button } from '@mui/material';
import { useHistory } from 'react-router';

const Home = (props) => {
	const [posts, setPosts] = useState([]);

	const [body, setBody] = useState();
	const [photo, setPhoto] = useState();

	const history = useHistory();

	
	// function to capture username input
	const handleBodyField = (e) => {
		setBody(e.target.value);
	};
	// function to capture email input
	const handlePhotoField = (e) => {
		setPhoto(e.target.value);
	};
	
	//    retrieves posts from API
	const getPost = async () => {
		try {
			const res = await axios.get(`${API_URL}/posts/`);
			setPosts(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	// function to allow user to make posts
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_URL}/posts/`, {
				body: body,
				photo: photo,
			});
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	if (!posts.length) {
		return <h2>Loading...</h2>;
	}

	// The results and new post form are displayed below
	return (
		<div>
			<form>
				<Box
					className='card'
					sx={{
						width: 500,
						maxWidth: '100%',
					}}>
					<TextField
						fullWidth
						label='new post'
						id='fullWidth'
						onChange={handleBodyField}
					/>
					<input type='file' onChange={handlePhotoField} />
					<Button variant='contained' onClick={handleSubmit}>
						Submit
					</Button>
				</Box>
			</form>
			<div className='posts'>
				{posts
					.slice(0)
					.reverse()
					.map((post) => (
						<Post post={post} key={post._id} />
					))}
			</div>
		</div>
	);
}

export default Home;