import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask.jsx';
import ListTask from './components/ListTask/ListTask.jsx';
import Fruits from './components/Fruits.jsx'


function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = ( newTask ) => {
    setTasks(prevTask => [...prevTask, newTask])
  }

  return (
    <div>
      <AddTask onNewTask={ addTask }/>
      <ListTask tasks={ tasks }/>
      <Fruits />

    </div>
  );
}

export default App;
