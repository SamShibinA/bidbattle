import React from 'react'
import "./navbar.css";
import uimage from "../Assests/userlogo.png";
import nimage from '../Assests/navlogo.png';
import { Link } from 'react-router-dom';
function NavigationBar() {
    return (
     <div id="navwithline">

      <div id="navbar">
            <div id="title">
            <img src={nimage} id="limg" alt="logo" />
            <h1>BidBattle</h1>
            </div>
            <div id='list'>
            <ul>
                <li>My Profile</li>
                <li>My Order</li>
                <Link to ="/Buy"><li>Buy</li></Link>
                <Link to = "/Auction"><li>Auction</li></Link>
                <Link to = "/Home"><li>Home</li></Link>
            </ul>
            </div>
            <img src={uimage} id="uimg" alt="USERIMAGE" />
 
      </div>
     </div>
      
    );
}

export default NavigationBar;