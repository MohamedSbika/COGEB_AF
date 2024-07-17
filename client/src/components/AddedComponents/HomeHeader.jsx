// import React from 'react'
import CoverCard from './CoverCard'
import StateCardAbout from './StateCardAbout'

export default function HomeHeader() {
  return (
    <div>
      
      <div className="h-[90vh] relative z-10 mt-16"> 
        <div className="absolute -top-16 inset-0 bg-[url('./img/cover.png')] bg-cover bg-no-repeat -z-10 m-4 ml-[12vw]"></div>
        <div
          className="absolute -top-20 right-0 -z-20 hidden lg:block"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 67%, 0% 100%)",
            backgroundColor: "#0B4F48",
            height: "400px",
            width: "500px",
          }}
        >
          <div></div>
        </div>
        
        <CoverCard />
        <StateCardAbout />
      </div>
    </div>
  )
}
