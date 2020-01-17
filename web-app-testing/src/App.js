import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

export function foulVal(strikeVal) {
  return (strikeVal < 2) ? strikeVal + 1 : strikeVal;
}

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  


  const handleBall = () => {
    
   
    
    if ( ball >=3 ) {
      alert('4 balls, batter walks')
        setStrike(0)
        setBall(0) 
      } else { 
        setBall(ball => ball +1)
      }
     
      
  }

  const handleStrike = () => {

    if ( strike >=2 ) {
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
    alert("it's a hit")
    setStrike(0)
    setBall(0)
  } 
  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard handleBall = {handleBall} handleStrike = {handleStrike} handleFoul={()=>setStrike(foulVal(strike))} handleHit={handleHit}/>

    </div>
  );
}

export default App;
