import React from 'react'
import "./navbar.css";
import uimage from "../Assests/profileicon.png";
import nimage from '../Assests/logo.png';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
      <div className="navwithline">
      <div className="navbar">
            <div className="title">
          <img src={nimage} className="limg" alt="logo" />
           <h1>BidBattle</h1>
            </div>
            <div>
            <ul>
                <li>My Profile</li>
                <li>My Order</li>
                 <Link to ="/Buy"><li>Buy</li></Link>
                <Link to="/Auction" ><li>Auction</li></Link> 
                <Link to ="/Home"><li>Home</li></Link>
            </ul>
            </div>
            <img src={uimage} className="uimg" alt="USERIMAGE" />

      </div>
      <div className="navline">
         <hr />
      </div>
      </div>
    );
}

export default NavigationBar;