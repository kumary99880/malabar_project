import React from 'react'
import F from '../GoldNackcle/Image/nkpjth060_n.jpg'
import F1 from '../GoldNackcle/Image/nkpjth017_c_2.jpg'
import F2 from '../GoldNackcle/Image/nkpjth062_c_1.jpg'
import F3 from '../GoldNackcle/Image/nkpjth060_n.jpg'
import { Link } from 'react-router-dom'

function GoldCard() {
  return (
    <>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div style={{ width: '325px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>

            <Link to='/HomeUnderClick'>
              <img src={F} style={{ width: '322px', height: '310px', marginTop: '0px' }} />

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


        <div style={{ width: '325px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={F1} style={{ width: '321px', height: '310px', marginTop: '0px' }} />
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

        <div style={{ width: '325px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={F2} style={{ width: '321px', height: '310px', marginTop: '0px', borderRadius: '10px 10px 0px 0px' }} />
          </div>
          <span style={{ fontSize: '12px', backgroundColor: '#CFB873', marginTop: '-15px', position: 'absolute' }}>NEW ARRIVAL</span>

          <div style={{ display: 'flex' }}>
            <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '6px', marginTop: '3px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '18px' }}></i> 274,466 </h2>
            <del style={{ color: '#c8c5c4 ', marginLeft: '20px' }}><i class="bi bi-currency-rupee" style={{ marginTop: '20px' }}></i> 291,835</del>
          </div>
          <div>
            <p style={{ fontSize: '11px', marginTop: '-5px', marginLeft: '10px' }}>SKU : NKWAV20051</p>
            <p style={{ fontSize: '9px', marginTop: '-13px', marginLeft: '10px' }}>10% OFF DIAMON CHARGES</p>
          </div>
        </div>


        <div style={{ width: '325px', height: '375px', backgroundColor: ' white', border: '2px solid grey', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }}>

          <i class="bi bi-heart" style={{ marginLeft: '290px', backgroundColor: ' #f1eeed', position: 'absolute' }}></i>

          <div>
            <img src={F3} style={{ width: '321px', height: '310px', marginTop: '0px' }} />
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
      </div>

      {/*----------- promis---------- */}



    </>
  )
}

export default GoldCard