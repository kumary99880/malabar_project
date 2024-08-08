import React from 'react'
import M350 from '../Component/Image/350_Stores.jpg'

function AboutOurStore() {
  return (
    <div style={{marginTop:'40px'}}>
        <div>
            <h2 style={{textAlign:'center'}}>About Our Store</h2>
            <p style={{textAlign:'center'}}>Get in touch with us for a complete jewellery shopping experience!</p>
        </div>
        <div style={{display:'flex'}}>
            <div>
                <img src={M350} style={{width:'703px',height:'393px'}}/>
            </div>
            <div>
                <div style={{width:'630px',height:'193px',backgroundColor:'#f9f2ea',borderRadius:'10px',marginLeft:'10px'}}>
                     <div style={{padding:'60px 180px'}}>
                     <h1>1800 5720 916</h1>
                     <p>Any Questions? Tollfree no for all stores</p>
                     </div>
                </div>
               <div style={{display:'flex'}}>
                       <div style={{width:'306px',height:'193px',backgroundColor:'#f9f2ea',borderRadius:'10px',marginLeft:'10px',marginTop:'10px'}}>
                          <div style={{padding:'20px'}}>
                                <h1 style={{fontSize:'30px',textAlign:'center'}}>Gold Scheme</h1>
                                <p style={{textAlign:'center',marginBottom:'30px'}}>Payment for india<br/>
                                stores</p>
                                <a href='#'  style={{marginLeft:'85px',borderBottom:'2px #9A0056 red',color:'#9A0056'}}> Pay Online</a>
                          </div>
                        </div>
                        <div style={{width:'310px',height:'193px',backgroundColor:'#f9f2ea',borderRadius:'10px',marginLeft:'10px',marginTop:'10px'}}>
                           <div style={{padding:'20px'}}>
                                <h1 style={{fontSize:'30px',textAlign:'center'}}>Gold Rate</h1>
                                    <p style={{textAlign:'center',marginBottom:'30px'}}>One best rate across<br/>
                                    India!</p>
                                    <a href='#' style={{marginLeft:'75px',borderBottom:'2px #9A0056 red',color:'#9A0056'}}>View Gold Rate</a>
                           </div>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutOurStore