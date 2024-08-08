import React, { useState } from 'react';
//import '../Component/ClickButton.css';
import malabarlogo from '../Component/Image/malabar-logo.png';
import '../Component/Header.css';
import HeaderNotScroll from '../Component/HeaderNotScroll';
import flag from '../Component/Image/flag.png';
import PopupCard from '../Component/PopupCard';
import ClickCard from '../Component/ClickCard';

// const PopupCard = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render if not open

//   return (
//     <div className="popup-overlay">
//       <div className="popup-card">
//         <h2>Popup Title</h2>
//         <p>This is the content of the popup card.</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLinkClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <header>
        <div className='phone'>
          <div>
            <i className="bi bi-headset"></i>
            <span>+91 6396594013</span>
          </div>
          <div className='whats-icon'>
            <i className="bi bi-whatsapp"></i>
            <span>+91 6396594013</span>
          </div>
        </div>

        <div className='All-celebrate'>
          <div className='img-logo'>
            <img src={malabarlogo} alt="Malabar Logo" />
            <p>CELEBRATE THE BEAUTY OF LIFE</p>
          </div>
          <div className='search'>
            {/* <p>Search</p> */}
            <input type='text' name='search' className='input' placeholder='Search' />
            <i className="bi bi-search icon"></i>
          </div>

          <div className="right-cart">
            <div className='location'>
              <i className="bi bi-geo-alt icon"></i>
              <div className='ram'>Store</div>
            </div>
            <div className='location'>
              <div className='flag'><img src={flag} alt="Flag" /></div>
              <div className='ram'>Country</div>
            </div>
            <div className='location'>
              <i className="bi bi-person icon"></i>
              <div className='ram'>
                <a href="#!" onClick={handleLinkClick} style={{color:'white'}}>Profile</a>
              </div>
              <PopupCard isOpen={isPopupOpen} onClose={handleClosePopup} />
            </div>
            <div className='location'>
              <i className="bi bi-heart icon"></i>
              <div className='ram'>Wishlist</div>
            </div>
            <div className='location'>
              <i className="bi bi-cart3 icon"></i>
              <div className='ram'>
              <a href="#!" onClick={handleLinkClick} style={{color:'white'}}>Card</a>
              </div>
              <ClickCard isOpen={isPopupOpen} onClose={handleClosePopup} />

            </div>
          </div>
        </div>
      </header>

      <HeaderNotScroll />
    </>
  );
};

export default Header;
