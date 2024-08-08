import React, { useState } from 'react';
//import '../Compon';
import malabarlogo from '../Component/Image/malabar-logo.png';
import '../BuyNowClick/Header2.css';




const Header2 = () => {


    return (
        <>
            <header>
                <div className='phone'>
                    <div className='img-logo' style={{marginLeft:'-90px'}}>
                        <img src={malabarlogo} alt="Malabar Logo" style={{marginLeft:'-1072px',width:'200px',height:'80px'}}/>
                        <p style={{marginLeft:'-1006px',fontSize:'9px'}}>CELEBRATE THE BEAUTY OF LIFE</p>
                    </div>
                    <div>
                        <i className="bi bi-headset"></i>
                        <span>+91 6396594013</span>
                    </div>
                    <div className='whats-icon'>
                        <i className="bi bi-whatsapp"></i>
                        <span>+91 6396594013</span>
                    </div>
                </div>

                <div className='All-celebrate'>




                </div>
            </header>


        </>
    );
};

export default Header2;
