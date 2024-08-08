import React, { useState } from 'react';
//import './HoverLink.css'; // Ensure this file exists for styling
//import HeaderNotScroll from '../Component/HeaderNotScroll';

const GiftCart = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="hover-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#!" className="hover-link"  style={{color:'#9A0056',fontSize:'15px'}}>GIFT CARDS</a>
      {isHovered && (
        <>
        </>
        // <div className="popup">
        //   <div className='shop'>
        //     <div className='shop-by'>Shop By Style</div>
        //     <div className='wearing'>Wearing Type</div>
        //     <div className='metal'>Shop By Metal</div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default GiftCart;
