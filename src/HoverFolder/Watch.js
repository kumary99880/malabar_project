import React, { useState } from 'react';
import '../HoverFolder/Watch.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Watch = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>WATCHES</a>
      {isHovered && (
        <div className="Watch" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top' style={{ fontSize: '5px' }}>
              <li> <a href='#' style={{ fontSize: '15px' }}>Shop By Type</a></li>



            </div>
          </div>

          <div className='Right' >
            <div className='Shop' style={{ marginTop: '10px' }} >
              <h3>Shop By Style</h3>

            </div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div >
                <div className='Band'>
                  <p>Bands</p>
                </div>
                <div className='Band'>
                  <p>Single Stone</p>
                </div>
                <div className='Band'>
                  <p>Two Headed</p>
                </div>
                <div className='Band'>
                  <p>Eternity</p>
                </div>


              </div>
              <div className='Band-right' style={{ marginLeft: '20px' }}>
                <div className='Casual'>
                  <p>Casual</p>
                </div>
                <div className='Casual'>
                  <p>Cocktail</p>
                </div>
                <div className='Casual'>
                  <p>broad</p>
                </div>
                <div className='Casual'>
                  <p>For Kids</p>
                </div>
              </div>
            </div>

            <div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Watch;
