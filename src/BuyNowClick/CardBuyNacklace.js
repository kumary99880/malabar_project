import React from 'react'
import c1 from '../FUNCTIONALITY/Image/nkwav20051_z_1.jpg';


function CardBuyNacklace
  () {
  return (
    <div style={{ width: '879px', height: '276px', padding: '20px 30px 20px 10px', backgroundColor: 'white', zIndex: '10px',border:'1px solid #afaeac ' ,marginBottom:'60px'}}>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={c1} style={{ width: '173px', height: '173px', border: '2px solid #cecdcc ' }} />
        </div>
        <div style={{ width: '660px', height: '221px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px' }}>
            <div>
              <h6 style={{ fontWeight: '900px', color: 'black', fontSize: '18px' }}>Mine Diamond Necklace NKWAV20047</h6>
              <p style={{ marginTop: '-1px', fontSize: '13px' }}>Product Code: <span style={{ fontWeight: '900px', fontSize: '14px', color: 'black' }}>NKWAV20051</span></p>
            </div>
            <div>
              <del style={{ color: '#c8c5c4', fontSize: '15px' }}>
                <i className="bi bi-currency-rupee" style={{ marginTop: '19px' }}></i> 291,835
              </del>
              <h2 style={{ fontSize: '19px', color: '#9A0056', marginLeft: '-2px' }}>
                <i className="bi bi-currency-rupee" style={{ marginTop: '12px' }}></i> 274,466
              </h2>
            </div>
          </div>
          {/* ------------------Khali Div ----------- */}
          <div style={{ width: '638px', height: '2px', backgroundColor: '#ebeae8 ', marginLeft: '20px' }}></div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <h6 style={{ fontSize: '14px', marginLeft: '2`0px' }}>Size : 18 INCHES (45.72 cm)</h6>
            <h6 style={{ fontSize: '13px', marginLeft: '50px' }}>Quality: <span style={{ fontSize: '13px' }}>1N</span></h6>
          </div>
          {/* ==========save 17,369 ===========*/}
          <div style={{ marginLeft: '20px' }}>
            <p>Save<i className="bi bi-currency-rupee"></i> 17,369
            </p>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '27%', height: '20px' }}>
                <p style={{ fontSize: '14px', marginTop: '-2px', marginLeft: '8px' }}>Diamond Quality: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>VV-EF</h6>
              </div>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '20%', height: '20px', marginLeft: '10px' }}>
                <p style={{ fontSize: '14px', marginLeft: '12px', marginTop: '-2px' }}>Gold Color: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>Rose</h6>

              </div>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '30%', height: '20px', marginLeft: '10px' }}>
                <p style={{ fontSize: '14px', marginLeft: '12px', marginTop: '-2px' }}>Size: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>18 INCHES (45.72 cm)</h6>

              </div>

            </div>


            <div style={{ display: 'flex', marginTop: '10px' }}>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '27%', height: '20px' }}>
                <p style={{ fontSize: '14px', marginTop: '-2px', marginLeft: '8px' }}>Diamond Weight: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>160</h6>
              </div>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '40%', height: '20px', marginLeft: '10px' }}>
                <p style={{ fontSize: '14px', marginLeft: '12px', marginTop: '-2px' }}>Diamond Charges: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>
                  <i className="bi bi-currency-rupee" style={{ backgroundColor: '#ebeae8  ' }}></i>
                  <del style={{color:'#bcbab7 '}}>158630</del>&nbsp;
                  151767
                </h6>

              </div>
              <div style={{ display: 'flex', backgroundColor: '#ebeae8  ', width: '30%', height: '20px', marginLeft: '10px' }}>
                <p style={{ fontSize: '14px', marginLeft: '12px', marginTop: '-2px' }}>Gold Purity: </p>
                <h6 style={{ fontSize: '14px', marginTop: '4px', marginTop: '2px' }}>18 KT (750)</h6>

              </div>
            </div>
            {/* ==========dispatch ===========*/}
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
              <div style={{display:'flex'}}>
                <p style={{fontSize:'15px'}}>Dispatch by:</p>
                <h6 style={{fontSize:'14px', marginTop: '4px'}}> Wednesday, sep 04, 24</h6>
              </div>
              <div>
                <button style={{border:'1px solid black',backgroundColor:'white',color:'black'}}>
                  Remove
                </button>
              </div>
            </div>
          </div>

        </div>




      </div>
    </div>
  )
}

export default CardBuyNacklace