import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Homepage/homepage';
import AuctionPage from './Pages/Auctionpage/auctionpage';
import BuyPage from './Pages/Buypage/buypage';
import NavigationBar from './Components/Navbar/navbar';
import Buy from './Components/Buy/buy'
function App() {

  return (
 <div>
  {/* <Buy /> */}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Auction" element={<AuctionPage />} />
        <Route path="/Buy" element={<BuyPage />}/>
      </Routes>
    </Router>
 </div>
  
  );
}

export default App;
