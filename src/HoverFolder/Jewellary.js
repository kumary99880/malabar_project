import React, { useState } from 'react';
import '../HoverFolder/Jewellary.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const Jewellary = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>JEWELLARYS</a>
      {isHovered && (
        <div className="Jewellary">
          <div className='shop'>
            <ul style={{display:'flex',flexDirection:'column'}}> 
              <li><a>Earrings</a></li>
              <li><a>Pendants</a></li>
              <li><a>Ring</a></li>
              <li><a>Chain</a></li>
              <li><a>Necklace</a></li>
              <li><a>Mangalsutra</a></li>
              <li><a>Bangle</a></li>
              <li><a>Bracelet</a></li>                <li><a>Mangalsutra</a></li>
              <li><a>Nosepin</a></li>
              <li><a>Accessories</a></li>




            </ul>
            {/* <div className='shop-by'>Shop By Style</div>
            <div className='wearing'>Wearing Type</div>
            <div className='metal'>Shop By Metal</div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jewellary;
