import React from 'react';
import kubki from "../kubki kawusia.png"
import "./kubki.css"

function Kubki(props) {
    return (
        <div className="kubki">
            <img src={kubki} alt="kubkiImg" className="kubkiImg"/>
        </div>
    );
}

export default Kubki;