import React, { useState } from 'react';
import '../HoverFolder/Gemstone.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';
import Bands from '../HoverFolder/Image/band (1).jpg'
import Solitaire from '../HoverFolder/Image/Solitaire-icon.jpg'
import Daily from '../HoverFolder/Image/Daily-Wear-icon.jpg'
import Office from '../HoverFolder/Image/Office-Wear-icon.jpg'
import Casual1 from '../HoverFolder/Image/Casual-Wear-icon.jpg'
import Yellow from '../HoverFolder/Image/Yellow-Gold_1_8.jpg'
//import './HoverLink.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Gemstone = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>GEMSTONE</a>
      {isHovered && (
        <div className="Gemstone" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top' style={{ fontSize: '5px' }}>
              <li> <a href='#' style={{ fontSize: '15px' }}>Rings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Earrings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Chains</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Bracelets</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Mens</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Collection</a></li>


            </div>
          </div>
          <div className='Right' >
            <div className='Shop' style={{ marginTop: '10px' }}>
              <h3>Shop By Style</h3>

            </div>
            <div style={{ display: 'flex', color: '#9A0056' }}>
              <div >
                <div className='Band'>
                  <img src={Bands} />
                  <p>Bands</p>
                </div>
                <div className='Band'>
                  <img src={Solitaire} />
                  <p>Single Stone</p>
                </div>



              </div>

            </div>

          </div>
          <div>
            <div className='Wear' style={{ marginTop: '10px' }}>
              <h3>Wearing Type</h3>
              <div style={{ color: '#9A0056' }}>
                <div className='Dail'>
                  <img src={Daily} />
                  <p>Daily Wear</p>
                </div>
                <div className='Dail'>
                  <img src={Office} />
                  <p>Office Wear</p>
                </div>
                <div className='Dail'>
                  <img src={Casual1} />
                  <p>Casual Wear</p>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div className='Metal' style={{ marginTop: '10px' }}>
              <h3>Shop By Metal</h3>
              <div className='Yellow' style={{ color: '#9A0056' }}>
                <img src={Yellow} />
                <p>Yellow Gold</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Gemstone;
