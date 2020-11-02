import React, { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes.jsx'
import ColorForm from './components/ColorForm.jsx'



var colors = []

function App() {

  

  const [currentColor, setCurrentColor] = useState("");
  const addColor = ( newColor ) => {
    colors.push({"background-color":currentColor});
    setCurrentColor( newColor );
    console.log(colors)
  }

  return (
    <div>
      <ColorForm onNewColor={ addColor }/>
      <Boxes boxes={ colors }/>
    </div>
  );
}

export default App;
