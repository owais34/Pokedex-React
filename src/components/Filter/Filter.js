import React, { useEffect, useState } from 'react';
import data from '../../data/type_array.json'
import './Filter.css'

function Filter(props) {
    const [state,setState]=useState([])
    useEffect(()=>{
        setState(data)
    },[])
    return (
        <div className="button-group">
            {
                state.map((item)=>{
                    return (
                        <button onClick={()=>{}} 
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