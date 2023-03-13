import React from 'react';
import Navbar from "../components/navbar";
import Shop from "../components/shop";
import './home.css'
import {isMobile} from 'react-device-detect';
import Kubki from "../components/kubki";
function Home(props) {
    if (isMobile){
        return(
            <div>
                Mobilki
            </div>
        )
    }
    else {
        return (
            <div className="homePage">
                <Navbar/>
                <Shop/>
                {/*<Kubki/>*/}
            </div>
        );
    }
}

export default Home;