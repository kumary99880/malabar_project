import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Component/Header';
 //import HoverLink from './Component/HoverLink';
//import Carousel from './Component/Carousel';
import Home from './Component/Home';
import HomeNuwa from './LinkNuwa/HomeNuwa';
import HomeStarlet from './STARLET/HomeStarlet';
import HomeNackcle from './GoldNackcle/HomeNackcle';
import HomeFunctionality from './FUNCTIONALITY/HomeFunctionality';
import HomeBuyNow from './BuyNowClick/HomeBuyNow';
import HomeUnderClick from './GoldUnderClick/HomeUnderClick'
import HomePlace from './PlaceOrderClick/HomePlace'
// import LocalStorageData from '../';


function App() {
  return (
    <div>
    
      {/* <HoverLink/> */}
    
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/HomeNuwa' element={<HomeNuwa/>}></Route> 
        <Route path='/HomeStarlet' element={<HomeStarlet/>}></Route> 
        <Route path='/HomeNackcle' element={<HomeNackcle/>}></Route> 
        <Route path='/HomeFunctionality' element={<HomeFunctionality/>}></Route> 
        <Route path='/HomeBuyNow' element={<HomeBuyNow/>}></Route> 
        <Route path='/HomePlace' element={<HomePlace/>}></Route> 

        <Route path='/HomeUnderClick' element={<HomeUnderClick/>}></Route> 


      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
