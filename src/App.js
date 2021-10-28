import Home from "./Components/Home";
import Nav from './Components/Nav'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Posts from "./Components/Posts";

function App() {
  return (
    <div>
      <h1>Hi from app</h1>
      <Home />
      <Nav />
      <Login />
      <Profile />
      <Posts />
    </div>
  );
}

export default App;
