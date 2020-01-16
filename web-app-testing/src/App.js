import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  


  const handleBall = () => {

    if ( strike > 1 || ball >  2 ) {
        alert('4th ball, next batter')
        setStrike(0)
        setBall(0) 
      } else { 
        setBall(ball => ball +1)
      }
  }

  const handleStrike = () => {

    if ( strike > 1 || ball > 3 ) {
       alert('3rd strike,next batter')
        setStrike(0)
        setBall(0) 
      } else { 
        setStrike(strike => strike + 1)
      }
  }

  const handleFoul = () => {
    if (strike <2) {
      setStrike(strike => strike+1)
    } else {
      alert('Foul has no effect on strike after strike reaches 2')
    }

    
  }

  const handleHit  = () => {
    alert("It's a hit")
    setStrike(0)
    setBall(0)
  } 
  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard handleBall = {handleBall} handleStrike = {handleStrike} handleFoul={handleFoul} handleHit={handleHit}/>

    </div>
  );
}

export default App;
