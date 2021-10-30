import React from 'react';

function Comment({ post }) {
	return (
		<div>
			<div className='body'>
				<p className='body'>{post.body}</p>
			</div>

			<img src={post.photo} />
		</div>
	);
}

export default Comment;
