import './App.css';
import { Router } from '@reach/router';
import NavBar from './components/NavBar'
import AllGames from './components/AllGames';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <AllGames default path="/games" />
        <Create path="/games/new" />
        <Details path="games/:id" />
        <Edit path="/games/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
