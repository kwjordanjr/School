import React, { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes.jsx'
import ColorForm from './components/ColorForm.jsx'


function App() {

  

  const [currentColor, setCurrentColor] = useState([]);
  const addColor = ( newColor ) => {
    setCurrentColor( prevColor => [...prevColor,{'background-color':newColor}]);
    console.log(currentColor)
  }

  return (
    <div>
      <ColorForm onNewColor={ addColor }/>
      <Boxes boxes={ currentColor }/>
    </div>
  );
}

export default App;
