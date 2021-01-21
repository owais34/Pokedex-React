import React from 'react';
import './Card.css'
import type from  '../../data/types.json'

function Card({pokemon}) {
    return (
        <div className="card-main">
            <img src={`https://img.pokemondb.net/artwork/${pokemon.name.english.toLowerCase()}.jpg`} 
            alt={pokemon.name.english} className="image"/>
            <h1 className="typography-card">{pokemon.name.english}</h1>
            <div className="type-display">
                {
                    
                }
            </div>
        </div>
    );
}

export default Card;