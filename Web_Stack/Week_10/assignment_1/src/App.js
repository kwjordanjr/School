import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ben" lastName='Smith' age={ 38 } hairColor="Black"/>
    </div>
  );
}

export default App;
