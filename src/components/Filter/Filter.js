import React, { useContext, useEffect, useState } from 'react';
import data from '../../data/type_array.json'
import './Filter.css'
import { PokeData } from "../../App";

function Filter(props) {
    const [state,setState]=useState([])
    useEffect(()=>{
        setState(data)
    },[])
    const PokemonContext=useContext(PokeData)
    return (
        <div className="button-group">
            {
                state.map((item)=>{
                    return (
                        <button onClick={()=>{
                            PokemonContext.dispatch({type:"set-type",payload:item.english})
                        }} 
                        style={{backgroundColor:item.color,color:item.text}}
                        key={item.english}
                        className="button"
                        >{item.english}</button>
                    )
                })
            }
        </div>
    );
}

export default Filter;