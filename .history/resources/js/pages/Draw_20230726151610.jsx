import React from 'react'
import Banner from '../components/banner/Banner'

function Draw() {
  return (
    <div className=" ">
    <Banner />
    <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
        <h1 className="text-center font-bold">BALLOT DATE : WEDNESDAY, JUL 26, 2023</h1>
        <h1 className="text-center font-bold">BALLOT TIME : 07:11 AM</h1>

    </div>

    <h1 className='my-5 font-bold text-4xl text-gray-800 uppercase text-center'>summary</h1>

    <div className='bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-md mx-3 my-5'>
        <h1 className='uppercase text-center bg-blue-'>Applicants</h1>
    </div>
    </div>
  )
}

export default Draw