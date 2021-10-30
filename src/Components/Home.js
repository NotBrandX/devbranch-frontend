import React, {useState, useEffect} from 'react';
import Post from './Post'
import axios from 'axios';
import API_URL from '../Config'
import { TextField, Box, Button } from '@mui/material';

const Home = (props) => {
   const [posts, setPosts] = useState([]);



//    retrieves posts from API
		const getPost = async () => {
			try {
				const res = await axios.get(`${API_URL}/posts`);
				setPosts(res.data);
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

		// The results are displayed below
		return (
			<div>
				<form>
					<Box
						sx={{
							width: 500,
							maxWidth: '100%',
						}}>
						<TextField fullWidth label='new post' id='fullWidth' />
						<input type='file' />
						<Button variant='contained'>Submit</Button>
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