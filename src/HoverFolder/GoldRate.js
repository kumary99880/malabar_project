import React, { useState } from 'react';
import '../HoverFolder/GoldRate.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const GoldRate = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link" style={{color:'#9A0056',fontSize:'15px'}}>GOLD RATE</a>
      {isHovered && (
        <div className="GoldRate">
          <div className='shop'>

            <h2>Today's Gold Rate</h2>
            <div className='KT22' >
              <h3>22 KT(916) </h3>
              <p> &nbsp;-<i class="bi bi-currency-rupee"></i> 6470/g</p>
            </div>
            <div className='bi-ram'>
            </div>
            {/* <i class="bi bi-dash"></i> */}

            <div className='KT18'>
              <h3>18 KT(750) </h3>
              <p> &nbsp;-<i class="bi bi-currency-rupee"></i> 9254/g</p>
            </div>
            <div className='bi-ram'>
            </div>
            {/* <i class="bi bi-dash"></i> */}
            <div className='Updated'>
              <p>Updated on : 05/08/2024<br />
                09:55 AM</p>
            </div>
          </div>

        </div>

      )}
    </div>
  );
};

export default GoldRate;
