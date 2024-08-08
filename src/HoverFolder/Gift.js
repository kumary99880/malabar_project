import React, { useState } from 'react';
import '../HoverFolder/Gift.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Gift = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>GIFTS</a>
      {isHovered && (
        <div className="Gift" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top' style={{ fontSize: '5px' }}>
              <li> <a href='#' style={{ fontSize: '15px' }}>Occasian</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Recommendation</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Collection</a></li>




            </div>
          </div>

          <div className='Right' >
            <div className='Shop' style={{ marginTop: '10px' }} >
              <h3>Shop By Occasian</h3>

            </div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div >
                <div className='Band'>
                  <p>Birthday</p>
                </div>
                <div className='Band'>
                  <p>Wedding</p>
                </div>
                <div className='Band'>
                  <p>Mother Day</p>
                </div>
                <div className='Band'>
                  <p>Valentine</p>
                </div>
                <div className='Band'>
                  <p>Diwali</p>
                </div>


              </div>
              <div className='Band-right' style={{ marginLeft: '20px' }}>
                <div className='Casual'>
                  <p>Engagement</p>
                </div>
                <div className='Casual'>
                  <p>Womens Day</p>
                </div>
                <div className='Casual'>
                  <p>Baby Birth</p>
                </div>
                <div className='Casual'>
                  <p>Festival Gift</p>
                </div>
                <div className='Casual'>
                  <p>Anniversary</p>
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

export default Gift;
