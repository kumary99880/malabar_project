import Carousel from 'react-bootstrap/Carousel';
import '../Component/Carousel.css';
import Ashada from '../Component/Image/Ashada-mobile-06072024.jpg';
import Caliesta from '../Component/Image/Caliesta-mobile-14052024.jpg';
import Evil from '../Component/Image/Evil-Eye-Collection-mobile-04042024.jpg';
import Nuwa from '../Component/Image/Nuwa-mobile-17072024.jpg';
import Gold from '../Component/Image/Gold-chain-banner-mobile.jpg';
import Kasu from '../Component/Image/Kasu-collection-mobile_24062024new.jpg';

function CustomCarousel() {
  const captionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '0',
    right: '0',
    zIndex: '10',
    color: '#fff',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background to captions
    padding: '10px' // Optional: Add padding to captions
  };

  const titleStyle = {
    borderBottom: '2px dotted #fff',
    paddingBottom: '10px',
    display: 'inline-block'
  };

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ashada} style={{width:'1347px',height:'500px'}}
          alt="Ashada"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Ashada Collection</h5>
          <p>Explore our exclusive Ashada collection.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Kasu}  style={{width:'1347px',height:'500px'}}
          alt="Kasu Collection"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Kasu Collection</h5>
          <p>Discover the beauty of the Kasu collection.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Nuwa}  style={{width:'1347px',height:'500px'}}
          alt="Nuwa Collection"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Nuwa Collection</h5>
          <p>Experience the elegance of Nuwa.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gold}  style={{width:'1347px',height:'500px'}}
          alt="Gold Chain Banner"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Gold Chain Collection</h5>
          <p>Shine bright with our Gold Chain collection.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Caliesta}  style={{width:'1347px',height:'500px'}}
          alt="Caliesta Collection"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Caliesta Collection</h5>
          <p>Elegant and timeless Caliesta pieces.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Evil}  style={{width:'1347px',height:'500px'}}
          alt="Evil Eye Collection"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={titleStyle}>Evil Eye Collection</h5>
          <p>Protective and stylish Evil Eye accessories.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
