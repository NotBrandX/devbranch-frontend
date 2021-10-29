import React, {useState, useEffect} from 'react';
import Post from './Post'
import axios from 'axios';
import API_URL from '../Config'

const Home = (props) => {
   const [posts, setPosts] = useState([]);

		const getPost = async () => {
			try {
				const res = await axios.get(`${API_URL}/posts`);
				setPosts(res.data);
			} catch (error) {
				console.log(error);
			}
            // console.log(res);
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
				<div className='posts'>
					{posts.slice(0).reverse().map((post) => (
						<Post post={post} key={post._id} />
					))}
				</div>
			</div>
		);
}

export default Home;