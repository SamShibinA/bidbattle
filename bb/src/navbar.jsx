import React from 'react'
import "./App.css";
import uimage from "./assets/userlogo.png";
import nimage from './assets/navlogo.png';

function NavigationBar() {
    return (
      <div id="navwithline">
      <div id="navbar">
            <div id="title">
            <img src={nimage} id="limg" alt="logo" />
            <h1>BidBattle</h1>
            </div>
            <div>
            <ul>
                <li>My Profile</li>
                <li>My Order</li>
                <li>Buy</li>
                <li>Auction</li>
                <li>Home</li>
            </ul>
            </div>
            <img src={uimage} id="uimg" alt="USERIMAGE" />

      </div>
      <div id="navline">
         <hr />
      </div>
      </div>
    );
}

export default NavigationBar;