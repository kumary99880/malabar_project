import React from 'react'
import legend from '../Component/Image/Legendz-collection-1.jpg'
import Kid from '../Component/Image/kids-collection-1.jpg'
import Sankha from '../Component/Image/Sankha-Pola-1.jpg'
import { Link } from 'react-router-dom'


function OurCellection() {
  return (
    <>
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <h2>Our Collection</h2>
            <p>Discover our latest jewellery collection!</p>
        </div>
        <div>
            <div>
                <img src={legend} style={{width:'411px',height:'500px'}}/>
                <Link to='/HomeStarlet'>
                     <img src={Kid} style={{width:'495px',height:'500px',marginLeft:'10px'}}/>

                </Link>
                <img src={Sankha} style={{width:'411px',height:'500px',marginLeft:'10px'}}/>

            </div>
        </div>
    </>
  )
}

export default OurCellection