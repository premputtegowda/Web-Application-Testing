import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  // const setBallScore = () => {

  // }
  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard />

    </div>
  );
}

export default App;
