import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function Post({ post }) {
	return (
		<Card sx={{ maxWidth: 450 }}>
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: '100vh' }}>
				<CardMedia
					component='img'
					height='350'
					image={post.photo}
					alt={post.id}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{post.body}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>
						<a href=''>Comment</a>{' '}
					</Button>
					<Button size='small'>
						<a href=''>Replies</a>{' '}
					</Button>
				</CardActions>
			</Grid>
		</Card>
		// <div>
		// 	<div className='body'>
		// 		<p className='body'>{post.body}</p>
		// 	</div>

		// 	<img src={post.photo} />
		// 	<a href='/comments'>Comments</a>
		// </div>
	);
}

export default Post;
