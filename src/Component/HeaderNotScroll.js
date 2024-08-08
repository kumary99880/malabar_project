import React, { useEffect, useState } from 'react';
import '../Component/HeaderNotScroll.css';
import Diamond from '../HoverFolder/Diamond';
import GoldHover from '../HoverFolder/GoldHover';
import Gemstone from '../HoverFolder/Gemstone';
import UncutDiamond from '../HoverFolder/UncutDiamond';
import Platinum from '../HoverFolder/Platinum';
import Coin from '../HoverFolder/Coin';
import Silver from '../HoverFolder/Silver';
import Watch from '../HoverFolder/Watch';
import Gift from '../HoverFolder/Gift';
import Jewellary from '../HoverFolder/Jewellary';
import GiftCart from '../HoverFolder/GiftCart';
import GoldRate from '../HoverFolder/GoldRate';

function HeaderNotScroll() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 100; // Adjust this value as needed
      setIsSticky(window.scrollY > stickyPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${isSticky ? 'sticky' : ''}`}>
      <ul>
        <li>
          {/* <a href='#'>DIAMOND</a> */}
          <Diamond className="hover-link" /> {/* HoverLink component here */}
        </li>
        <li>
          {/* <a href='#'>GOLD</a> */}
          <GoldHover className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Gemstone className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <UncutDiamond className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Platinum className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Coin className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Silver className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Watch className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Gift className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <Jewellary className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <GiftCart className="hover-link" />
        </li>
        <li>
          {/* <a href='#'>GEMSTONE</a> */}
          <GoldRate className="hover-link" />
        </li>
        {/* Repeat for other list items as needed */}
      </ul>
    </div>
  );
}

export default HeaderNotScroll;
