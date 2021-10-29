import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Account from './Components/Account';
import Posts from './Components/Posts';

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
			</Switch>
		</Router>
	);
}

export default App;
