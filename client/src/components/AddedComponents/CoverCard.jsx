import React from "react";
import { useNavigate } from "react-router-dom";

export default function CoverCard() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 ">
      <div className="max-w-sm p-6 mt-8 ml-2 bg-[#c1c3c57e] rounded-lg shadow 
  sm:max-w-[15vw] md:max-w-[20vw] lg:max-w-[25vw] xl:max-w-[30vw]">
        <h5 className="mb-2 max-w-[90%]  text-5xl font-extrabold  uppercase tracking-tight ml-6 text-[#515557] lg:max-w-[60%]">
          Investissez <br /> dans le confort , <br /> Investissez <br /> dans
          l'avenir
        </h5>
      </div>
      <button
      href="#"
      onClick={()=>navigate("/search?")}
      className="inline-flex mt-4 ml-[10%] uppercase items-center px-6 py-4 text-xl font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
      style={{
        background: "linear-gradient(270deg, #B88824 0%, #E1C550 39%, #CEA93B 74%, #B07A12 100%)"
      }}
    >
      voir plus
    </button>
    </div>
  );
}
