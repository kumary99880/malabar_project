import React from 'react';
import Rakhi from '../Component/Image/rakhi-homepage.jpg';
import Spiritual from '../Component/Image/spiritual-rakhi.jpg';
import Alpha from '../Component/Image/alpha-rakhinew.jpg';
import Trendy from '../Component/Image/Trendy-rakhi.jpg';
import Gift from '../Component/Image/gift-for-sis.jpg';

function RakhiCollection() {
  return (
    <div style={{marginTop:'50px'}}>
      <div style={{textAlign:'center'}}>
      <h1 style={{fontSize:'30px'}}>Gold Rakhi Collection</h1>
      <p style={{fontSize:'18px'}}>Discover the perfect blend of tradition and versability with our exclusive Gold Rakhi collection</p>
      </div>
        
    <div className="rakhi-collection" >
      <div className="featured-image">
        <img src={Rakhi} alt="Rakhi Homepage" style={{width:'1339px',height:'441px'}}  />
      </div>
      <div className="image-gallery" style={{display:'flex', justifyContent:'space-between'}}>
        <div className="gallery-item">
          <img src={Spiritual} alt="Spiritual Rakhi" style={{width:'322px', height:'148px',borderRadius:'10px',margin:'8px'}}/>
        </div>
        <div className="gallery-item">
          <img src={Alpha} alt="Alpha Rakhi" style={{width:'322px', height:'148px',borderRadius:'10px',margin:'8px'}} />
        </div>
        <div className="gallery-item">
          <img src={Trendy} alt="Trendy Rakhi" style={{width:'322px', height:'148px',borderRadius:'10px',margin:'8px'}}/>
        </div>
        <div className="gallery-item">
          <img src={Gift} alt="Gift for Sis" style={{width:'322px', height:'148px',borderRadius:'10px',margin:'8px'}}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RakhiCollection;
