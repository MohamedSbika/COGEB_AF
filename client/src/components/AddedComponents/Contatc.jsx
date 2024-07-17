import React from "react";
import iemail from "../../img/iemail.png"
import iphone from "../../img/iphone.png"
import ilocation from "../../img/ilocation.png"
import iwebsite from "../../img/iwebsite.png"

export default function Contact() {
  return (
    <div>
      <h1 className="text-[#3A5A40] pt-10 text-3xl font-bold sm:ml-[13%] mb-8">
        CONTACT NOUS{" "}
      </h1>
      <div className="grid -mt-2 mb-14 mx-auto max-w-[70vw] sm:max-w-[80vw] lg:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4 items-center justify-center ">

      <div className="flex lg:w-[18vw] lg:text-sm flex-col items-center justify-center rounded-lg w-3/4 h-40 p-4 text-center bg-[#2D7A71] m-auto">
      <img src={iemail} className="w-8 h-8 col-span-1"/>
          <div className="col-span-4 text-sm text-center  md:text-center ">
            <h3 className="text-white text-center">E-mail</h3>
            <p className="text-black text-center">cogebimmobiliere@gmail.com</p>
          </div>
        </div>

        <div className="flex lg:w-[18vw] lg:text-sm flex-col items-center justify-center rounded-lg w-3/4 h-40 p-4 text-center bg-[#2D7A71] m-auto">
        <img src={iphone} className="w-8 h-8 col-span-1"/>
          <div className="col-span-4 text-sm text-left md:text-center">
            <h3 className="text-white text-center">TELEPHONE</h3>
            <p className="text-black text-center">+216 73 323 435</p>
          </div>
        </div>

        <div className="flex lg:w-[18vw] lg:text-sm  flex-col items-center justify-center rounded-lg w-3/4 h-40 p-4 text-center bg-[#2D7A71] m-auto">
        <img src={iwebsite} className="w-8 h-8 col-span-1"/>
          <div className="col-span-4 text-sm text-left md:text-center ">
            <h3 className="text-white text-center">Site Web</h3>
            <p className="text-black text-center">Cojeb/immobiliére.com</p>
          </div>
        </div>

        <div className="flex  lg:w-[18vw] lg:text-sm flex-col items-center justify-center rounded-lg w-3/4 h-40 p-4 text-center bg-[#2D7A71] m-auto">
        <img src={ilocation} className="w-8 h-8 col-span-1"/>
          <div className="col-span-4 text-sm text-left md:text-center">
            <h3 className="text-white text-center">Adresse</h3>
            <p className="text-black text-center ">Avenue de l'environnement, Sousse,Tunisia, 4000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

