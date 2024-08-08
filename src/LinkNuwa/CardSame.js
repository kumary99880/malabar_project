import React from 'react'
import First from '../LinkNuwa/Image/nkwav20007_z_1.jpg'
import First1 from '../LinkNuwa/Image/nkwav20029_z_1.jpg'
import First2 from '../LinkNuwa/Image/nkwav20030_z_1.jpg'
import First3 from '../LinkNuwa/Image/nkwav20046_z_1.jpg'
import { Link } from 'react-router-dom'

function CardSame() {
  return (
    <>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div style={{ width: '328px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <Link to='/HomeFunctionality'>
              <img src={First} style={{ width: '322px', height: '300px', marginTop: '0px' }} />

            </Link>
          </div>
          <span style={{ fontSize: '12px', backgroundColor: '#CFB873', marginTop: '-25px', position: 'absolute' }}>NEW ARRIVAL</span>

          <div style={{ display: 'flex' }}>
            <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '6px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '12px' }}></i> 274,466 </h2>
            <del style={{ color: '#c8c5c4 ', marginLeft: '20px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '12px' }}></i> 291,835</del>
          </div>
          <div>
            <p style={{ fontSize: '13px', marginTop: '-5px', marginLeft: '10px' }}>SKU : NKWAV20051</p>
            <p style={{ fontSize: '9px', marginTop: '-13px', marginLeft: '10px' }}>10% OFF DIAMON CHARGES</p>
          </div>
        </div>


        <div style={{ width: '328px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={First1} style={{ width: '319px', height: '300px', marginTop: '0px' }} />
          </div>
          <span style={{ fontSize: '6px', backgroundColor: '#CFB873', marginTop: '-25px', position: 'absolute' }}>NEW ARRIVAL</span>

          <div style={{ display: 'flex' }}>
            <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '10px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 274,466 </h2>
            <del style={{ color: '#c8c5c4 ', marginLeft: '20px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 291,835</del>
          </div>
          <div>
            <p style={{ fontSize: '13px', marginTop: '-6px', marginLeft: '10px' }}>SKU : NKWAV20051</p>
            <p style={{ fontSize: '9px', marginTop: '-13px', marginLeft: '10px' }}>10% OFF DIAMON CHARGES</p>
          </div>
        </div>

        <div style={{ width: '328px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={First2} style={{ width: '319px', height: '300px', marginTop: '0px' }} />
          </div>
          <span style={{ fontSize: '6px', backgroundColor: '#CFB873', marginTop: '-25px', position: 'absolute' }}>NEW ARRIVAL</span>

          <div style={{ display: 'flex' }}>
            <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '10px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 274,466 </h2>
            <del style={{ color: '#c8c5c4 ', marginLeft: '20px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 291,835</del>
          </div>
          <div>
            <p style={{ fontSize: '13px', marginTop: '-6px', marginLeft: '10px' }}>SKU : NKWAV20051</p>
            <p style={{ fontSize: '9px', marginTop: '-13px', marginLeft: '10px' }}>10% OFF DIAMON CHARGES</p>
          </div>
        </div>


        <div style={{ width: '328px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={First3} style={{ width: '319px', height: '300px', marginTop: '0px' }} />
          </div>
          <span style={{ fontSize: '6px', backgroundColor: '#CFB873', marginTop: '-25px', position: 'absolute' }}>NEW ARRIVAL</span>

          <div style={{ display: 'flex' }}>
            <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '10px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 274,466 </h2>
            <del style={{ color: '#c8c5c4 ', marginLeft: '20px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '6px' }}></i> 291,835</del>
          </div>
          <div>
            <p style={{ fontSize: '13px', marginTop: '-6px', marginLeft: '10px' }}>SKU : NKWAV20051</p>
            <p style={{ fontSize: '9px', marginTop: '-13px', marginLeft: '10px' }}>10% OFF DIAMON CHARGES</p>
          </div>
        </div>
      </div>

      {/*----------- promis---------- */}



    </>
  )
}

export default CardSame