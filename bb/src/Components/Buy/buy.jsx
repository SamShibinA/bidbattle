import React from 'react';
import './buy.css';
import p2 from '../Assests/Pic1.webp'
import p1 from '../Assests/Pic2.webp'
import p3 from '../Assests/Pic3.webp'
import p4 from '../Assests/Pic4.webp'
import p5 from '../Assests/Pic5.webp'
import p6 from '../Assests/Pic6.jpg'
import p7 from '../Assests/Pic7.jpeg'
import p8 from '../Assests/Pic8.jpeg'
import p9 from '../Assests/Pic9.jpg'

function Buy() {
  return (
    <div className="app-container">
      {/* Search and Filter */}
      <div className="search-filter-container">
        <input type="text" placeholder="Search for Art, Type, Theme and more" className="search-bar" />
        <div className="icon">🔍</div>
        <select className="dropdown" defaultValue="Size">
         <option value="" disabled selected>Size</option>
         <option value="Small">Small</option>
         <option value="Medium">Medium</option>
         <option value="Large">Large</option>
         <option value="">None</option>
        </select>
        <select className="dropdown">
        <option value="" disabled selected>Filter</option>
         <option value="low-to-high">Low to High</option>
         <option value="high-to-low">High to Low </option>
         <option value="newest-first">Newest First</option>
         <option value="">None</option>
        </select>
      </div>

      {/* Card Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src={p1} alt="Art 1" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Mona Lisa Oil Painting</div>
          <div className="card-price">$100.00</div>
          <div className="card-theme">Theme: Historical</div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={p2} alt="Art 2" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">The Everest Along with Nature</div>
          <div className="card-price">$150.00</div>
          <div className="card-theme">Theme: Nature</div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={p3} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src={p4} alt="Art 4" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">The Fall in a Forest</div>
          <div className="card-price">$175.00</div>
          <div className="card-theme">Theme: Nature</div>
        </div>
        {/* Card 5 */}
        <div className="card">
          <img src={p5} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div> 
        {/* Card 6 */}
        <div className="card">
          <img src={p6} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div> 
        {/* Card 7 */}
        <div className="card">
          <img src={p7} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div> 
        {/* Card 8 */}
        <div className="card">
          <img src={p8} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>
          {/* Card 9 */} 
        <div className="card">
          <img src={p9} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>
             {/* Card 10 */} 
        <div className="card">
          <img src={p4} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>
             {/* Card 11 */} 
        <div className="card">
          <img src={p3} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>
             {/* Card 12 */} 
        <div className="card">
          <img src={p1} alt="Art 3" />
          <div className="heart-icon">❤️</div>
          <div className="card-title">Man inside a Painting</div>
          <div className="card-price">$200.00</div>
          <div className="card-theme">Theme: Modern</div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
