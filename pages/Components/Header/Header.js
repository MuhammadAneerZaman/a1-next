import React from 'react'
import Image from 'next/image'
import Bgimg from "../../../public/0fm.webp";

export default function Header1() {
 

  return (
   <div className='relative h-screen w-full'>
   <Image src={Bgimg} className=' w-full h-full' />
   <div className=' absolute top-1/2 sm:left-1/4  md:left-1/3 '>
        <h1 className=' text-2xl font-bold'>Not sure where to go? Perfect.</h1>
            <div className=' text-center cursor-pointer hover:shadow-xl gray transition duration-300 absolute text-purple-600 bg-white p-3 rounded-3xl left-1/3 text-xl w-40 '>I'm flexible</div>
   </div>
   </div>
  )
}



