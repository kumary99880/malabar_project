import React from 'react'
import ring from '../Component/Image/Gold-Ring.jpg'
import earring from '../Component/Image/Gold-Earring.jpg'
import pendant from '../Component/Image/Gold-Pendant.jpg'
import chain from '../Component/Image/Gold-Chain.jpg'


function ShopGender() {
  return (
    <div style={{marginTop:'40px'}}>
      <div style={{textAlign:'center'}}>
        <h2>Shop By Gender</h2>
      <ul style={{display:'flex',justifyContent:'center'}}>
        <li><a>Women's jewellery</a></li>|
        <li><a>Men's jewellery</a></li>|
        <li><a>Kid's jewellery</a></li>|
        </ul>
      </div>
      <div style={{display:'flex'}}>
        <img src={ring} style={{width:'327px',height:'341px',borderRadius:'10px'}}/>
        <img src={earring} style={{width:'327px',height:'341px',borderRadius:'10px',marginLeft:'10px'}}/>
        <img src={pendant} style={{width:'327px',height:'341px',borderRadius:'10px',marginLeft:'10px'}}/>
        <img src={chain} style={{width:'327px',height:'341px',borderRadius:'10px',marginLeft:'10px'}}/>

      </div>

    </div>
  )
}

export default ShopGender