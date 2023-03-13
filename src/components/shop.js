import React from 'react';
import './shop.css'

import kawusiaDoDomu from '../kawusia do domu bez tla.png'
import kawusiaDoKawiarni from '../kawusia do kawiarni bez tla.png'

function Shop(props) {
    return (
        <div className="shopContainer">
            <style>@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');</style>
            <div className="shopTitle">
                Sklep :)
            </div>

            <div className="shopItemsContainer">

                <div className="shopItem">

                    <div className="shopItemImgContainer">
                        <img src={kawusiaDoDomu} alt="kawusiaDoDomu" className="shopItemImg"/>
                    </div>

                    <div className="buyButtonContainer">
                        <button className="dowiedzSieButton">Dowiedz sie więcej :)</button>
                        <button className="buyButton">Kup teraz :)</button>
                    </div>

                </div>


                <div className="shopItem">

                    <div className="shopItemImgContainer">
                        <img src={kawusiaDoKawiarni} alt="kawusiaDoKawiarni" className="shopItemImg"/>
                    </div>

                    <div className="buyButtonContainer">
                        <button className="dowiedzSieButton">Dowiedz sie więcej :)</button>
                        <button className="buyButton">Kup teraz :)</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Shop;