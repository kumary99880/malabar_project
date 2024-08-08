import React from 'react'
import '../Component/fast.css'
import fast from '../Component/Image/fast-ships-2.gif'
import seller from '../Component/Image/best-seller.jpg'
import Arrival from '../Component/Image/new-arrivals.jpg'
import Ring from '../Component/Image/solitare.jpg'
import Anklet from '../Component/Image/Anklet.jpg'
import Bangle from '../Component/Image/Bangle-1.jpg'
import Earring from '../Component/Image/Offer.jpg'
import Mangalsutra from '../Component/Image/Mangalsutra.jpg'
import Platinum from '../Component/Image/Platinum.jpg'
import Gold from '../Component/Image/Chain-1.jpg'
import Couple from '../Component/Image/band.jpg'







function FastShips() {
  return (
 <section style={{margin:'40px'}}> 
     <div className='fast-ships'style={{display:'flex',}} >
        <div>
          
             <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
                 <img src={fast} style={{borderRadius:'50%', width:'98px'}}/>
          
             </div>
             <span style={{marginLeft:'20px' }}>Fast ships</span>
        </div>

        <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={seller} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'20px' }}>Best Seller</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Arrival} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'20px' }}>New Arrivals</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Ring} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'28px' }}>Ring</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Anklet} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'25px' }}>Anklet</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Bangle} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'25px' }}>Bangle</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Earring} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'25px' }}>Earring</span>
         </div>
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
              <img src={Mangalsutra} style={{borderRadius:'50%', width:'98px'}}/>
       
          </div>
             <span style={{marginLeft:'20px' }}>Mangalsutra</span>
         </div>
         <div>
          
             <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
                <img src={Platinum} style={{borderRadius:'50%', width:'98px'}}/>
       
             </div>
              <span style={{marginLeft:'20px' }}>Platinum</span>
         </div>
        
         <div>
          
          <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
             <img src={Gold} style={{borderRadius:'50%', width:'98px'}}/>
    
          </div>
           <span style={{marginLeft:'20px' }}>Gold chain</span>
      </div>
      <div>
          
             <div className='fast' style={{border:'2px solid #f0bdab ',padding:'3px', borderRadius:'50%',marginRight:'15px'}} >
                <img src={Couple} style={{borderRadius:'50%', width:'98px'}}/>
       
             </div>
              <span style={{marginLeft:'20px' }}>Couple Band</span>
         </div>
   
   </div>
   
 </section>
  )
}

export default FastShips