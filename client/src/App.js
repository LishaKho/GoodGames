import './App.css';
import { Router } from '@reach/router';
import AllPets from './components/AllPets';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
      <AllPets default path="/pets" />
      <Create path="/pets/new" />
      <Details path="pets/:id" />
      <Edit path="/pets/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
