import React, { useContext, useState } from 'react';
import { PokeData } from "../../App";
import "./Search.css";

function Search(props) {
    const [text,setText]=useState('')
    const PokeDataContext=useContext(PokeData)

    const inputChangeHandler=(event)=>{
        setText(event.target.value)
        PokeDataContext.dispatch({type:"search",payload:event.target.value})
    }
    return (
        <div className="search-bar">
            <h1 className="typography">Search for pokemon </h1>
            <div className="searchBox">

            <input className="searchInput"type="text" name="" placeholder="Search" value={text}
            onChange={(e)=>{
                    inputChangeHandler(e)
            }}/>
                <button className="searchButton" href="#">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-games-video-casino-gamer-1-42381.png"
                    style={{width:"40px"}} alt="okeicon"/>
                </button>
            </div>
        </div>
        
    );
}

export default Search;