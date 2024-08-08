import React, { useState } from 'react';
import '../HoverFolder/Diamond.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';
import Bands from '../HoverFolder/Image/band (1).jpg'
import eternity from '../HoverFolder/Image/eternity.jpg'
import two from '../HoverFolder/Image/two-color.jpg'
import Solitaire from '../HoverFolder/Image/Solitaire-icon.jpg'
import Casual from '../HoverFolder/Image/Casual-icon.jpg'
import Cocktail from '../HoverFolder/Image/Cocktail-icon.jpg'
import broad from '../HoverFolder/Image/broad-icon.jpg'
import For from '../HoverFolder/Image/For-Kids-icon.jpg'
import Daily from '../HoverFolder/Image/Daily-Wear-icon.jpg'
import Office from '../HoverFolder/Image/Office-Wear-icon.jpg'
import Casual1 from '../HoverFolder/Image/Casual-Wear-icon.jpg'
import Party from '../HoverFolder/Image/Party-Wear-icon.jpg'
import Yellow from '../HoverFolder/Image/Yellow-Gold_1_8.jpg'








const Diamond = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>DIAMNOD</a>
      {isHovered && (
        <div className="Diamond" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top' style={{ fontSize: '5px' }}>
              <li> <a href='#' style={{ fontSize: '15px' }}>Rings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Earrings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Pendants</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Chains</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Bangles</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Bracelets</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Necklaces</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Mangalsutra</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Nosepins</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Accessories</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Mens</a></li>

            </div>
          </div>
          <div className='Right' >
            <div className='Shop' style={{ marginTop: '10px' }}>
              <h3>Shop By Style</h3>

            </div>
            <div style={{ display: 'flex' }}>
              <div >
                <div className='Band'>
                  <img src={Bands} />
                  <p>Bands</p>
                </div>
                <div className='Band'>
                  <img src={Solitaire} />
                  <p>Single Stone</p>
                </div>
                <div className='Band'>
                  <img src={two} />
                  <p>Two Headed</p>
                </div>
                <div className='Band'>
                  <img src={eternity} />
                  <p>Eternity</p>
                </div>


              </div>
              <div className='Band-right'>
                <div className='Casual'>
                  <img src={Casual} />
                  <p>Casual</p>
                </div>
                <div className='Casual'>
                  <img src={Cocktail} />
                  <p>Cocktail</p>
                </div>
                <div className='Casual'>
                  <img src={broad} />
                  <p>broad</p>
                </div>
                <div className='Casual'>
                  <img src={For} />
                  <p>For Kids</p>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div className='Wear' style={{ marginTop: '10px' }}>
              <h3>Wearing Type</h3>
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
              <div className='Dail'>
                <img src={Party} />
                <p>Party Wear</p>
              </div>
            </div>
          </div>
          <div>
            <div className='Metal' style={{ marginTop: '10px' }}>
              <h3>Shop By Metal</h3>
              <div className='Yellow'>
                <img src={Yellow} />
                <p>Yellow Gold</p>
              </div>
              <div className='Yellow'>
                <img src={Yellow} />
                <p>Rose Gold</p>
              </div>
              <div className='Yellow'>
                <img src={Yellow} />
                <p>Two Tone</p>
              </div>
              <div className='Yellow'>
                <img src={Yellow} />
                <p>Three Tone</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Diamond;
