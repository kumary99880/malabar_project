import React, { useState } from 'react';
import './UncutDiamond.css'; // Ensure this file exists for styling


const UncutDiamond = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>UNCUT DIAMNOD</a>
      {isHovered && (
        <div className="UncutDiamond" style={{ display: 'flex' }}>
          <div className='Ring'>
          <div className='Top' style={{ fontSize: '5px' }}>
              <li> <a href='#' style={{ fontSize: '15px' }}>Earrings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Rings</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Pendants</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Necklaces</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Bangles</a></li>
              <li> <a href='#' style={{ fontSize: '15px' }}>Nasepins</a></li>


            </div>
          </div>
          <div className='Right' >
            <div className='Shop' style={{ marginTop: '10px' }}>
              <h3>Shop By Style</h3>

            </div>
            <div style={{ display: 'flex', marginTop: '25px', color: '#9A0056' }}>
              <div >
                <div className='Band'>

                  <p>Chandelier</p>
                </div>
                <div className='Band'>
                  <p>Dangle</p>
                </div>
                <div className='Band'>
                  <p>Drops</p>
                </div>
                <div className='Band'>
                  <p>Hoops & Bali</p>
                </div>
                <div className='Band'>
                  <p>Studs</p>
                </div>



              </div>

            </div>

          </div>
          <div>
            <div className='Wear' style={{ marginTop: '10px' }}>
              <h3>Wearing Type</h3>
              <div style={{color:'#9A0056',marginTop:'25px'}}>
                <div className='Dail'>
                  <p>Daily Wear</p>
                </div>
                <div className='Dail'>
                  <p>Office Wear</p>
                </div>
                <div className='Dail'>
                  <p>Casual Wear</p>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div className='Metal' style={{ marginTop: '10px' }}>
              <h3>Shop By Metal</h3>
              <div className='Yellow' style={{color:'#9A0056'}}>
                <p>Yellow Gold</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default UncutDiamond;
