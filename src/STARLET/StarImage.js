import React from 'react'
import fi from '../STARLET/Image/diamond_jewelelry_AJPENSP2341_MBPD10419_1.jpg'
import './StartImage.css'
import { Link } from 'react-router-dom'


function StarImage() {
  return (
    <>
     <img src={fi} style={{width:'1350px',height:'213px'}}/>

     <ul style={{display:'flex'}}>
                <Link to='/'>
                    <li ><a>Home</a> /</li>
                </Link>
                <li><a> Gifts</a> </li>
                

            </ul>

    </>
  )
}

export default StarImage