import React from 'react'
import gold from '../GoldNackcle/Image/gold-necklace.jpg'

function GoldFirstImage() {
  return (
    <>
    <img src={gold} style={{width:'1366px' ,height:'213px'}}/>
    <ul style={{display:'flex'}}>
      <li><a>Home /</a></li>
      <li><a>Gold /</a></li>
      <li><a>Nacklace </a></li>

    </ul>
    </>
  )
}

export default GoldFirstImage