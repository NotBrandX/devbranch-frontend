import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import API_URL from '../Config';
import { useHistory } from 'react-router-dom';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function Post({ post }) {
	

	// modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// text-field
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	
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
					<Button variant='contained' size='medium' onClick={handleOpen}>
						Comment
					</Button>
					<Button variant='contained' size='medium'>
						Replies
					</Button>
				</CardActions>
			</Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				size='medium'>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Post a comment
					</Typography>
					<TextField
						id='outlined-multiline-static'
						multiline
						rows={4}
						cols={3}
					/>
					<input type='file' />
					<Button variant='contained'>
						Submit
					</Button>
				</Box>
			</Modal>
		</Card>
	);
}

export default Post;
