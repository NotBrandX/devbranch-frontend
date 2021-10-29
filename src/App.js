import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Post from './Components/Post';
import Comment from './Components/Comment';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

	return (
		<Router>
			<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/login'
					render={() => <Login setLoggedIn={setLoggedIn} />}
				/>
				<Route
					exact
					path='/signup'
					render={() => <Signup setLoggedIn={setLoggedIn} />}
				/>
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/settings' component={Settings} />
			</Switch>
		</Router>
	);
}

export default App;
