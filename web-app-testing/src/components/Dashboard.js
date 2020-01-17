import React from 'react';


export default function Dashboard(props){
    
    return (
        <section className='btn-container'>
            <button data-testid="ball-btn" onClick={props.handleStrike}>Strike</button>
            <button onClick={props.handleBall}>Ball</button>
            <button onClick={props.handleFoul}>Foul</button>
            <button onClick={props.handleHit}>Hit</button>
        </section>
    )
}