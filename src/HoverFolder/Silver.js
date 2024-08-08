import React, { useState } from 'react';
import '../HoverFolder/Silver.css';  // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Silver = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>SILVER</a>
      {isHovered && (
        <div className="Silver" style={{ display: 'flex' }}>
          <div className='Ring'>
            <div className='Top'  style={{fontSize:'5px'}}>
              <li > <a href='#' style={{fontSize:'15px'}}>Shop By Type</a></li>



            </div>
          </div>
          <div className='Right' >
            <div className='Shop' style={{ marginLeft: '10px', marginBottom: '8px', marginTop: '9px' }} >
              <h3>Silver Bars</h3>

            </div>


          </div>
          <div>
            
          </div>
          <div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Silver;
