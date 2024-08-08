import React from 'react'
import show from '../Component/Image/Brides-of-India-banner.jpg'
import Bride from '../Component/Image/Bride_01.jpg'
import View from '../Component/Image/view-all.png'
import View1 from  '../Component/Image/Bride_01.jpg'
import View2 from  '../Component/Image/Bride_02.jpg'
import View3 from  '../Component/Image/Bride_03.jpg'
import View4 from  '../Component/Image/Bride_04.jpg'
import View5 from  '../Component/Image/Bride_05.jpg'

import '../Component/BridesOfIndia.css'


function BridesOfIndia() {
  return (
    <>
      <div style={{marginTop:'40px',textAlign:'center'}}>
        <h2>Brides Of India</h2>
        <p>Leading the journey of a new life in their own unique way</p>
      </div>
      <div className='main' >
       <img src={show} style={{width:'1339px',height:'686px'}}/>
            <div className='upper'>
                <div className='lower'>
                   <img src={Bride}/>
                   <h2>Dazzling<br/>
                   Bride</h2>

                </div >
                <div  className='lower'>
                   <img src={View1}/>
                   <h2>Bejeweled<br/>
                   Bride</h2>

                </div>
                <div  className='lower'>
                   <img src={View2}/>
                   <h2>Enchanting<br/>
                   Bride</h2>

                </div>
                <div  className='lower'>
                   <img src={View3}/>
                   <h2>Trendsetter<br/>
                   Bride</h2>

                </div>
                <div  className='lower'>
                   <img src={View4}/>
                   <h2>Show-Stopper<br/>
                   Bride</h2>

                </div>
                <div  className='lower'>
                <img src={View}/>
                  

                </div>
                
              
               
            </div>
      </div>
    </>
  )
}

export default BridesOfIndia