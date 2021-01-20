import { createContext,  useReducer } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import pokedex from '../src/data/pokedex.json'
import Card from './components/Card/Card';

export const PokeData=createContext()

const initialState=pokedex

const reducer=(state,action)=>{
    switch(action.type){
        
    }
}

function App() {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
      <PokeData.Provider value={{state,dispatch}}>
          <div className="grid-container">
        <div className="Header" ><Header/></div>
        <div className="Search" ><Search/></div>
        <div className="Filter" ><Filter/></div>
        <div className="Cards">
        {
            state.map((pokemon)=>{
                return <Card key={pokemon.id} pokemon={pokemon}/>
            })
        }
        </div>
        </div>
      </PokeData.Provider>
  );
}

export default App;
