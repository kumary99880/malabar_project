import React from 'react'
import Header from '../Component/Header'
import Footer1 from '../Component/Footer1'
import GoldFirstImage from '../GoldNackcle/GoldFirstImage'
import  Dropdown  from '../LinkNuwa/DropDown'
import GoldCard from '../GoldNackcle/GoldCard'
import GoldPromise from '../GoldNackcle/GoldPromise'
import GoldCard1 from '../GoldNackcle/GoldCard1'
import GoldRightPromise from '../GoldNackcle/GoldRightPromise'

function HomeNackcle() {
  return (
    <>
        <Header/>
         <GoldFirstImage/>
         <Dropdown/>
         <GoldCard/>
         <GoldPromise/>
         <GoldCard1/>
         <GoldRightPromise/>
         <GoldCard/>

        <Footer1/>
    </>
  )
}

export default HomeNackcle