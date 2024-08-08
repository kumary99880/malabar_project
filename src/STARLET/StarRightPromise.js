import React from 'react'
import First from '../STARLET/Image/pdstr10019_c.jpg'

import Fi from '../STARLET/Image/pddzl29925_c.jpg'
import First2 from '../STARLET/Image/Fair-price-11_417.jpg'







function StarRightPromise() {
  return (
    <>
    <div style={{display:'flex'}}>

        {/* --------------------Card -----------------*/}
     
      <div style={{width:'324px',height:'375px' ,backgroundColor:' white', border:'2px solid grey',marginTop:'20px', marginLeft:'0px',borderRadius:'10px'}}>
          
          <i class="bi bi-heart" style={{marginLeft:'290px',backgroundColor:' #f1eeed' ,position:'absolute'}}></i>
   
      <div>
            <img src={First} style={{width:'319px',height:'300px',marginTop:'0px',borderRadius:'10px 10px 0px 0px'}}/>
      </div>
      <span style={{fontSize:'6px',backgroundColor:'#CFB873', marginTop:'-25px' ,position:'absolute'}}>NEW ARRIVAL</span>

      <div style={{display:'flex'}}>
        <h2 style={{fontSize:'19px',color:'#9A0056',marginLeft:'10px'}}><i class="bi bi-currency-rupee" style={{marginTop:'6px'}}></i> 274,466 </h2>
        <del style={{color:'#c8c5c4 ',marginLeft:'20px'}}><i class="bi bi-currency-rupee" style={{marginTop:'6px'}}></i> 291,835</del>
      </div>
      <div>
        <p style={{fontSize:'13px',marginTop:'-6px',marginLeft:'10px'}}>SKU : NKWAV20051</p>
        <p style={{fontSize:'9px',marginTop:'-13px',marginLeft:'10px'}}>10% OFF DIAMON CHARGES</p>
      </div>
</div>


<div style={{width:'324px',height:'375px' ,backgroundColor:' white', border:'2px solid grey',marginTop:'20px',marginLeft:'10px',marginRight:'10px',borderRadius:'10px'}}>
    
    <i class="bi bi-heart" style={{marginLeft:'290px',backgroundColor:' #f1eeed' ,position:'absolute'}}></i>

<div>
      <img src={Fi} style={{width:'319px',height:'300px',marginTop:'0px',borderRadius:'10px 10px 0px 0px'}}/>
</div>
<span style={{fontSize:'6px',backgroundColor:'#CFB873', marginTop:'-25px' ,position:'absolute'}}>NEW ARRIVAL</span>

<div style={{display:'flex'}}>
  <h2 style={{fontSize:'19px',color:'#9A0056',marginLeft:'10px'}}><i class="bi bi-currency-rupee" style={{marginTop:'6px'}}></i> 274,466 </h2>
  <del style={{color:'#c8c5c4 ',marginLeft:'20px'}}><i class="bi bi-currency-rupee" style={{marginTop:'6px'}}></i> 291,835</del>
</div>
<div>
  <p style={{fontSize:'13px',marginTop:'-6px',marginLeft:'10px'}}>SKU : NKWAV20051</p>
  <p style={{fontSize:'9px',marginTop:'-13px',marginLeft:'10px'}}>10% OFF DIAMON CHARGES</p>
</div>
</div>
  {/* -------------------Card Stop ---------------------*/}
  <img src={First2} style={{width:'675px',height:'375px' ,marginTop:'20px'}}/>

     {/* <div style={{width:'324px',height:'375px'}}>
       <img src={liting} style={{width:'324px',height:'375px'}}/>
    </div>  */}
      
    
      </div> 
    </>
  )
}

export default StarRightPromise