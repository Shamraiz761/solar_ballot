import React from 'react'
import banner from "../../assets/banner.jpg"
import './index.css'
function Banner() {
  return (
    <div>
        <img src={banner} className='banner'/>
    </div>
  )
}

export default Banner