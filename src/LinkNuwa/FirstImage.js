import React from 'react'
import im from '../LinkNuwa/Image/Category.jpg'
import './FirstImage.css'
import { Link } from 'react-router-dom'

function FirstImage() {
  return (
        <>
            <div>
                <img src={im} style={{width:'1366px',height:'213px'}}/>
            </div>
            <ul style={{display:'flex'}}>
                <Link to='/'>
                    <li ><a>Home</a> /</li>
                </Link>
                <li><a> Diamond</a> /</li>
                <li><a>Collection</a> /</li>
                <li><a>Shop By Collection</a> /</li>
                <li><a>Nuwa</a></li>

            </ul>
        </>
  )
}

export default FirstImage