import React from 'react'
import Gold from '../Component/Image/gold-necklace-28052024.jpg'
import ring from '../Component/Image/gold-ring-28052024.jpg'
import earring from '../Component/Image/gold-earring-28052024.jpg'
import pendant from '../Component/Image/gold-pendant-28052024.jpg'
import chain from '../Component/Image/gold-chain-28052024.jpg'
import mangalsutra from '../Component/Image/gold-mangalsutra-28052024.jpg'
import nospin from '../Component/Image/gold-nospin-28052024 (1).jpg'
import { Link } from 'react-router-dom'


function GoldCategory() {
  return (
    <div style={{marginTop:'40px'}}>
      <div style={{textAlign:'center'}}>
          <h2>Gold Category</h2>
          <p>Embrace the spirit of this season with our timeless pieces</p>
      </div>
     <div style={{display:'flex'}}>
            <div>
              <Link to='/HomeNackcle'>
                   <img src={Gold} style={{width:'327px',height:'362',borderRadius:'10px'}}/>

              </Link>
            </div>
            <div >
                <div style={{display:'flex'}} >
                    <div> <img src={ring} style={{width:'320px',height:'175px' ,marginLeft:'14px',borderRadius:'10px'}}/></div>
                    <div><img src={earring} style={{width:'320px',height:'175px',marginLeft:'20px',borderRadius:'10px'}}/></div>
                    <div><img src={pendant} style={{width:'320px',height:'175px',marginLeft:'20px',borderRadius:'10px'}}/></div>
                </div>
                <div style={{display:'flex',marginTop:'10px'}}>
                    <div> <img src={chain} style={{width:'320px',height:'175px',marginLeft:'14px',borderRadius:'10px'}}/></div>
                    <div><img src={mangalsutra} style={{width:'320px',height:'175px',marginLeft:'20px',borderRadius:'10px'}}/></div>
                    <div><img src={nospin} style={{width:'320px',height:'175px',marginLeft:'20px',borderRadius:'10px'}}/></div>
                </div>
            </div>
     </div>
    </div>
  )
}

export default GoldCategory