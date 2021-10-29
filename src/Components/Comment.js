import React from 'react';

function Comment({ post }) {
	return (
		<div>
			<div className='body'>
				<p className='body'>{post.body}</p>
			</div>

			<img src={post.photo} />
			<a href='/comments'>Comments</a>
		</div>
	);
}

export default Comment;
