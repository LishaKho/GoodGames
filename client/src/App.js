import './App.css';
import { Router } from '@reach/router';
import NavBar from './components/NavBar'
import AllGames from './components/AllGames';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Registration from './components/Registration'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Login path="/games/login" />
        <Registration path="/games/registration" />
        <AllGames default path="/games" />
        <Create path="/games/new" />
        <Details path="games/:id" />
        <Edit path="/games/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
