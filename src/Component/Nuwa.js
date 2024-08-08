import React from 'react'
import Ring from '../Component/Image/Diamond-Ring-web-25072024.jpg'
import Earring from '../Component/Image/Diamond-Earring-web-25072024.jpg'
import nacklce from '../Component/Image/Diamond-Necklace.jpg'
import Pendant from '../Component/Image/Diamond-Pendant-web-25072024.jpg'
import Bangle from '../Component/Image/Diamond-Bangle-web-25072024.jpg'
import { Link } from 'react-router-dom'
import NuwaLink from '../LinkNuwa/HomeNuwa'


function Nuwa() {
  return (
    <>
        <div style={{textAlign:'center',marginTop:'30px'}}>
           <h2>Nuwa Diamond Collection</h2>
           <p>Discover the beauty of diamond with our timeless diamond collection</p>
        </div>
    <div className='Nuwa' style={{display:'flex'}}>
   
        <div className='nuwa-two' style={{marginLeft:'10px'}}>
            
               <img src={Ring} style={{width:'400px',borderRadius:'10px'}}/>
               
         
            <img src={Earring} style={{width:'400px',marginTop:'10px',borderRadius:'10px'}}/> 
        </div>
        <div className='Necklce'>
        <Link to='/HomeNuwa'>
            <img src={nacklce} style={{width:'510px' , height:'580px' ,marginRight:'11px'}}/>
        </Link>
        </div>
        <div className='Pendent'>
            <img src={Pendant} style={{width:'400px',borderRadius:'10px'}}/>
            <img src={Bangle} style={{width:'400px',borderRadius:'10px',marginTop:'10px'}}/>
        </div>
    </div>
    </>
  )
}

export default Nuwa