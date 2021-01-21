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
                    pokemon.type.map((type_item)=>{
                        return(
                            <h3 style={{color:type[type_item]["text"],
                            backgroundColor:type[type_item]["color"],
                            margin:"5px",
                            borderRadius:"5px",
                            padding:"5px"
                        }}>{type_item}</h3>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;