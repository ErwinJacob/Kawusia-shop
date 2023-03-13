import React from 'react';
import './navbar.css'
import logo from '../kawusia_logo_bez_tla.PNG'


function Navbar(props) {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="navLogo"/>
            {/*<Menu/>*/}
        </div>
    );
}

function Menu(props){
    return(
        <div className="menu">
            <div className="menuButtonContainer">
                <button className="menuButton">Sklep</button>
            </div>
            <div className="menuButtonContainer">
                <button className="menuButton">Przepisy</button>
            </div>
            <div className="menuButtonContainer">
                <button className="menuButton">IG</button>
            </div>
        </div>
    )
}

export default Navbar;