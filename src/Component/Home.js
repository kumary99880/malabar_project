import React from 'react'
import Header from '../Component/Header';
import FastShips from '../Component/FastShips';
import RakhiCollection from './RakhiCollection';
import PerfectTime from './PerfectTime';
import Nuwa from '../Component/Nuwa';
import OurCellection from '../Component/OurCellection';
import GoldCategory from '../Component/GoldCategory';
import ShopGender from '../Component/ShopGender';
import BridesOfIndia from '../Component/BridesOfIndia';
import Gift from '../HoverFolder/Gift';
import AboutOurStore from '../Component/AboutOurStore';
import Footer1 from '../Component/Footer1';
import Carousel from '../Component/Carousel';


function Home() {
  return (
    <>
    
    <Header/>
    <Carousel/>
    <FastShips/>
    <RakhiCollection/>
    <PerfectTime/>
    <Nuwa/>
    <OurCellection/>
    <GoldCategory/>
    <ShopGender/>
    <BridesOfIndia/>
    <Gift/>
    <AboutOurStore/>
    <Footer1/>
   
    </>
  )
}

export default Home