import React, { useState } from 'react';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { Link } from 'react-router-dom'


import '../FUNCTIONALITY/MainFun.css';
import M1 from '../FUNCTIONALITY/Image/nkwav20051_z_1.jpg';
import M4 from '../FUNCTIONALITY/Image/nkwav20051_2_1.jpg';
import M3 from '../FUNCTIONALITY/Image/nkwav20051_1_1.jpg';
import M2 from '../FUNCTIONALITY/Image/nkwav20051_4.jpg';
import M5 from '../FUNCTIONALITY/Image/nkwav20051_3_1.jpg';
import BIS from '../FUNCTIONALITY/Image/BIS.jpg';
import Di from '../FUNCTIONALITY/Image/download.png';



function MainFun() {
  // State to manage the currently displayed image
  const [currentImage, setCurrentImage] = useState(M1);
  const [isHeartActive, setIsHeartActive] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handleHeartClick = () => {
    setIsHeartActive(!isHeartActive);
  };

  return (
    <div>
      <div className='homelink'>
        <ul>
          <li><a href="#">Home /</a></li>
          <li><a href="#">Diamond /</a></li>
          <li><a href="#">Collection /</a></li>
          <li><a href="#">Shop By Collection /</a></li>
          <li><a href="#">Nuwa /</a></li>
          <li><a href="#">Mine Diamond Necklace NKWAV20051 /</a></li>
        </ul>
      </div>
      <div className='main'>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '500px', height: '664px' }}>
            <img
              src={currentImage}
              className="zoom-image"
              style={{ width: '500px', height: '500px' }}
              alt="Diamond Necklace"
              id='poster'
            />
            {/* ------------------image under-----------------*/}
            <div style={{ display: 'flex', margin: '20px 0px 0px 60px' }}>
              <div>
                <img
                  src={M1}
                  style={{ width: '70px', height: '75px', cursor: 'pointer' }}
                  alt="Thumbnail 1"
                  onClick={() => handleImageClick(M1)}
                />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img
                  src={M2}
                  style={{ width: '70px', height: '75px', cursor: 'pointer' }}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(M2)}
                />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img
                  src={M3}
                  style={{ width: '70px', height: '75px', cursor: 'pointer' }}
                  alt="Thumbnail 3"
                  onClick={() => handleImageClick(M3)}
                />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img
                  src={M4}
                  style={{ width: '70px', height: '75px', cursor: 'pointer' }}
                  alt="Thumbnail 4"
                  onClick={() => handleImageClick(M4)}
                />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img
                  src={M5}
                  style={{ width: '70px', height: '75px', cursor: 'pointer' }}
                  alt="Thumbnail 5"
                  onClick={() => handleImageClick(M5)}
                />
              </div>
            </div>
            <div
              style={{ position: 'absolute', top: '2px', fontSize: '20px', left: '470px' }}
              onClick={handleHeartClick}
            >
              <i
                className={`bi bi-heart ${isHeartActive ? 'active' : ''}`}
                style={{ backgroundColor: isHeartActive ? '#e9e7e6' : 'transparent', cursor: 'pointer' }}
              ></i>
            </div>
          </div>
        </div>
        <div style={{ width: '782px', height: '664px', marginLeft: '20px' }}>
          <div>
            <p style={{ fontWeight: '900px', color: 'black' }}>Mine Diamond Necklace NKWAV20047</p>
            <p style={{ marginTop: '-15px', fontSize: '13px' }}>Product Code: <span style={{ fontWeight: '900px', fontSize: '14px', color: 'black' }}>NKWAV20051</span></p>
            <p style={{ marginTop: '10px', fontSize: '13px' }}>Free Shipping In India | Hallmarked jewellery available for sale</p>
            <p style={{ color: '#9d9d9d' }}>Availability: <span style={{ fontSize: '16px', fontWeight: '900px', color: 'black' }}> &nbsp;Make to order</span></p>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '-30px' }}>
                <h2 style={{ fontSize: '25px', color: '#9A0056', marginLeft: '-2px' }}>
                  <i className="bi bi-currency-rupee" style={{ marginTop: '12px' }}></i> 274,466
                </h2>
                <p style={{ marginTop: '-10px', fontSize: '11px' }}>(Inclusive of all taxes)</p>
              </div>
              <div style={{ marginLeft: '30px' }}>
                <del style={{ color: '#c8c5c4', fontSize: '17px' }}>
                  <i className="bi bi-currency-rupee" style={{ marginTop: '19px' }}></i> 291,835
                </del>
              </div>
            </div>
            <div style={{ width: '169px', height: '24px', border: '1px dotted #bcbab7 ' }}>
              <p style={{ padding: '3px', fontSize: '10px', color: '#9A0056' }}>10% saving on diamond charges</p>
            </div>
          </div>
          <div>
            <div style={{ width: '586px', height: '90px', backgroundColor: '#f1f0ef', marginTop: '20px', padding: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                <p style={{ marginLeft: '-50px' }}>Size:</p>
                <p style={{ fontSize: '14px', fontWeight: '900px' }}>Gold Color:</p>
                <p style={{ fontSize: '14px', fontWeight: '900px' }}>Diamond Quality:</p>
              </div>
              <div style={{ display: 'flex' }}>
                <CDropdown variant="btn-group">
                  <CDropdownToggle color="secondary" size="sm" style={{ fontSize: '10px', marginTop: '-6px' }}>Size</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Select Size</CDropdownItem>
                    <CDropdownItem href="#">18 INCHES (45.72 cm)</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group">
                  <CDropdownToggle color="secondary" size="sm" style={{ marginLeft: '70px', marginTop: '-6px' }}>Rose</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#" style={{ fontSize: '14px' }}>Rose</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group">
                  <CDropdownToggle color="secondary" size="sm" style={{ marginLeft: '110px', marginTop: '-6px' }}>WS-EF</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">WS_EF</CDropdownItem>
                    <CDropdownItem href="#">SI-GH</CDropdownItem>
                    <CDropdownItem href="#">VVSVS-GH</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </div>
          </div>

          {/* ------------------Close dropdown =----------------*/}
          <div>
            <div style={{ width: '586px', height: '94px', padding: '10px', marginTop: '10px' }}>
              <p style={{ fontSize: '13px' }}>price Breckup</p>
              <div style={{ display: 'flex', marginTop: '-10px' }}>
                <div style={{ marginLeft: '20px' }}>
                  <div><p style={{ fontSize: '14px', color: 'black' }}>Gold</p></div>
                  <div style={{ marginTop: '-15px', marginLeft: '-7px', fontSize: '14px' }}>
                    <i className="bi bi-currency-rupee" style={{ fontSize: '14px' }}></i> 80025
                  </div>
                </div>

                <div style={{ marginLeft: '20px' }}>
                  <div><p style={{ fontSize: '14px', color: 'black' }}>Diamond</p></div>
                  <div style={{ marginTop: '-15px', marginLeft: '-7px', fontSize: '14px' }}>
                    <i className="bi bi-currency-rupee" style={{ fontSize: '14px' }}></i> 151200
                  </div>
                </div>

                <div style={{ marginLeft: '20px' }}>
                  <div><p style={{ fontSize: '14px', color: 'black' }}>Marking</p></div>
                  <div style={{ marginTop: '-15px', marginLeft: '-7px', fontSize: '14px' }}>
                    <i className="bi bi-currency-rupee" style={{ fontSize: '14px' }}></i> 32910
                  </div>
                </div>

                <div style={{ marginLeft: '20px' }}>
                  <div><p style={{ fontSize: '14px', color: 'black' }}>Tax</p></div>
                  <div style={{ marginTop: '-15px', marginLeft: '-7px', fontSize: '14px' }}>
                    <i className="bi bi-currency-rupee" style={{ fontSize: '14px' }}></i> 7924
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===================start form======================== */}
          <div>
            <div style={{ marginTop: '20px' }}>
              <input type='number' placeholder='Enter Pin Code' style={{ padding: '3px' }} />
              <button style={{ backgroundColor: '#9A0056', padding: '3px', height: '34px', borderRadius: '0px 2px 2px 0px' }}>CHECK</button>
            </div>
          </div>

          {/* ==================Buy Now======================== */}
          <div style={{ marginTop: '30px' }}>
            <Link to='/HomeBuyNow'>
              <button style={{
                backgroundColor: '#9A0056', width: '250px',
                padding: '10px 40px 40px 40px', height: '34px', borderRadius: '0px 2px 2px 0px', textDecoration: 'none'
              }}>Buy Now</button>
            </Link>
          </div>

        </div>
      </div>

      {/* ==================Mobil phone =================*/}
      <div style={{ display: 'flex', marginLeft: '520px' }}>

        <div >
          <div>
            <p style={{ fontSize: '13px' }}>Any Questions ? Please Contact us at</p>

            <i class="bi bi-headset"></i> +91 22 62300916
            <i class="bi bi-whatsapp" style={{ marginLeft: '20px' }}></i> +91 22 62300916

          </div>

        </div>
        <div style={{ marginLeft: '30px', fontSize: '14px', marginTop: '17px' }}>
          <p>100% Certified by <br />
            International Standards
          </p>
        </div>
        <div style={{ marginLeft: '30px' }}>
          <p style={{ fontSize: '10px', marginLeft: '10px' }}>100%</p>
          <img src={BIS} style={{ width: '55px', height: '55px', marginTop: '-20px' }} />
          <h6 style={{ marginTop: '-14px', marginLeft: '10px', fontSize: '12px', fontWeight: '900px' }}>BIS 750</h6>
          <p style={{ fontSize: '11px', marginTop: '-10px' }}>Hail Marked Gold</p>
        </div>
        <div style={{ marginLeft: '30px' }}>
          <img src={Di} style={{ width: '40px', height: '40px', marginTop: '12px' }} />
          <p style={{ fontSize: '12px' }}>Certified</p>
          <p style={{ fontSize: '11px', marginTop: '-20px' }}> DIAMONDS</p>

        </div>
      </div>
    </div>
  );
}

export default MainFun;
