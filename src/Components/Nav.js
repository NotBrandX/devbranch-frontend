import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const Nav = ({loggedIn, setLoggedIn}) => {
	const history = useHistory()

	const logOut = () => {
		setLoggedIn(false);
		history.push('/');
	};
	
	const [anchorEl, setAnchorEl] = React.useState(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};
	const menuItems = [
		{
			menuTitle: 'Home',
			pageURL: '/',
		},
		{
			menuTitle: 'Profile',
			pageURL: '/profile',
		},
		{
			menuTitle: 'Sign Up',
			pageURL: '/signup',
		},
		{
			menuTitle: 'Logout',
			pageURL: '/login',
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						DevBranch
					</Typography>
					<div>
						{isMobile ? (
							<>
								<IconButton
									size='large'
									edge='start'
									color='inherit'
									aria-label='menu'
									onClick={handleMenu}
									sx={{ mr: 2 }}>
									<MenuIcon />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorEl)}
									onClose={() => setAnchorEl(null)}>
									{menuItems.map((menuItem) => {
										const { menuTitle, pageURL } = menuItem;
										return (
											<MenuItem onClick={() => handleMenuClick(pageURL)}>
												{menuTitle}
											</MenuItem>
										);
									})}
								</Menu>
							</>
						) : (
							<div>
								<Button
									variant='contained'
									onClick={() => handleButtonClick('/')}>
									Home
								</Button>
								{loggedIn ? (
									<>
									<Button
									variant='contained'
									onClick={() => handleButtonClick('/profile')}>
									Profile
								</Button>
								<Button
									variant='contained'
									onClick={logOut}>
									Log Out
								</Button>
									</>
								) : (
									<>
									<Button
									variant='contained'
									onClick={() => handleButtonClick('/signup')}>
									Sign Up
								</Button>
								<Button
									variant='contained'
									onClick={() => handleButtonClick('/login')}>
									Login
								</Button>
								</>
								)}
							</div>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Nav;
