import React from 'react'
import Header from '../Component/Header'
import Footer1 from '../Component/Footer1'
import StarImage from '../STARLET/StarImage'
import  Dropdown  from '../LinkNuwa/DropDown'
import StarCard from '../STARLET/StarCard'
import StarPromise from '../STARLET/StarPromis'
import StarRightPromise from '../STARLET/StarRightPromise'


function HomeStarlet() {
  return (
    <>
     <Header/>
     <StarImage/>
     <Dropdown/>
     <StarCard/>
     <StarPromise/>
     <StarCard/>
     <StarRightPromise/>
     <StarCard/>
     <Footer1/>
    </>
  )
}

export default HomeStarlet