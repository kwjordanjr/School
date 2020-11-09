import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Example from './components/Example';
import NavBar from './components/NavBar'



function App() {
  return (
    <div >
      
      <NavBar />
      <Router>
        <Example path='/dashboard'/>
      </Router>

      
    </div>
  );
}

export default App;
