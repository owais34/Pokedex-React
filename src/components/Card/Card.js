import React from 'react';
import './Card.css'

function Card({pokemon}) {
    return (
        <div className="card-main">
            <img src={`https://img.pokemondb.net/artwork/${pokemon.name.english.toLowerCase()}.jpg`} 
            alt={pokemon.name.english} className="image"/>
            <h1 className="typography">{pokemon.name.english}</h1>
        </div>
    );
}

export default Card;