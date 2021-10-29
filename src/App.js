import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Profile from './Components/Profile';
import Account from './Components/Account';
import Post from './Components/Post';
import Comment from './Components/Comment'

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/account' component={Account} />
				<Route exact path='/comments' component={Comment} />
			</Switch>
		</Router>
	);
}

export default App;
