import React, { useState } from 'react';
import '../HoverFolder/Coin.css';  // Ensure this file exists for styling

//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Coin = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link" style={{color:'#9A0056',fontSize:'15px'}}>GOLD COIN</a>
      {isHovered && (
        <div className="Coin" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top' style={{fontSize:'15px'}}>
              <li> <a href='#' style={{fontSize:'15px'}}>Shop By Type</a></li>



            </div>
          </div>
          <div className='Right' >
            <div className='Shop' style={{marginLeft: '10px', marginBottom: '8px' ,marginTop:'9px'}} >
              <h3>999</h3>

            </div>
            <div style={{ display: 'flex', color: '#9A0056' }}>
              <div >
                <div className='Band'>
                  <p>1g</p>
                </div>
                <div className='Band'>
                  <p>2g</p>
                </div>
                <div className='Band'>
                  <p>3g</p>
                </div> <div className='Band'>
                  <p>5g</p>
                </div> <div className='Band'>
                  <p>8g</p>
                </div> <div className='Band'>
                  <p>10g</p>
                </div>



              </div>

            </div>

          </div>
          <div>
            <div className='Wear' >
              <div style={{ marginLeft: '10px', marginBottom: '30px' }}>
                <h3>916</h3>
              </div>
              <div style={{ color: '#9A0056' }}>
                <div className='Dail'>

                  <p>1g</p>
                </div>
                <div className='Dail'>
                  <p>2g</p>
                </div>
                <div className='Dail'>
                  <p>3g</p>
                </div>
                <div className='Dail'>
                  <p>5g</p>
                </div>
                <div className='Dail'>
                  <p>8g</p>
                </div>
                <div className='Dail'>
                  <p>10g</p>
                </div>
              </div>

            </div>
          </div>
          <div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;
