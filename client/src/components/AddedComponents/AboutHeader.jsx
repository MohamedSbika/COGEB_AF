import React from 'react'
import cover from '../../img/about_cover.png'
import StateCardAbout from '../AddedComponents/StateCardAbout';


export default function AboutHeader() {
  return (
    
    
    <div>

        <div className='flex justify-between -z-10 flex-wrap '>
          <div className='text-4xl mt-10 items-center place-items-center sm:max-w-[45vw]'>
              <h1 className='text-[#3A5A40] mr-16 font-medium sm:font-extrabold '>A PROPOS DE NOUS</h1>
          </div>
          <div>
      <StateCardAbout />
      </div>
          <div className='text-6xl text-blue-700'>
            <img src={cover} className='rounded-md h-[50vh]  sm:h-[75vh]'/>

          </div>
        </div>
        
        
    </div>
  )
}
