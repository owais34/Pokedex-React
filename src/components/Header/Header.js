import React from 'react';
import './Header.css'
import logo from '../media/pokeball_large.png'

function Header(props) {
    return (
        <div className="header-container">
            <div className="head-image">
            <img src="https://i.imgur.com/VaPIoJC.png" border="0" alt="title" className="grow"></img>
            <img src={logo} 
            alt="pokeball" style={{width:"200px"}} className="pokeball"/>
            </div>
            <div className="sub-heading grow" >My own version of the infamous pokedex</div>
        </div>
    );
}

export default Header;