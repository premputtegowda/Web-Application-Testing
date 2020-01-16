import React from 'react';


export default function Display(props){
    return (
        <section className='display'>
            <div>
                <h2>Balls: {props.ball}</h2>
                
            </div>
            <div>
                <h2>Strikes: {props.strike}</h2>
            </div>
        </section>
    )
}