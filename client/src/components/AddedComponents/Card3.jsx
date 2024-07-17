import React from 'react';
import cov from '../../img/bg.jpg';
import { useNavigate } from 'react-router-dom';

export default function Card3() {
  const navigate = useNavigate();
  return (
    <div className='mt-10'>
      <div className="relative w-5/6 mx-auto font-sans max-h-80 rounded-lg overflow-hidden before:absolute before:w-full before:h-max-h-72 before:inset-0 before:bg-[#E67557] before:opacity-50 before:z-10">
        <img src={cov} className="absolute inset-0 w-full h-80 object-cover" alt="Biglogo"/>

        <div className="min-h-[350px] relative z-30 h-max-h-72 max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 rounded-lg">
        <p className="sm:text-2xl text-base text-center text-white">NOTRE DERNIER PROJET</p>

          <h2 className="sm:text-5xl pt-4 text-white text-2xl font-bold mb-2">VOUS POUVEZ DECOUVRIR AVEC NOUS 
          LES DERNIERS PROJETS REALISE </h2>
          
          <button
            type="button"
            onClick={()=>navigate("/searchProject?")}
            style={{
                background: "linear-gradient(270deg, #B88824 0%, #E1C550 39%, #CEA93B 74%, #B07A12 100%)"
              }}
            className="mt-6 bg-transparent text-white  text-3xl py-3 px-6  rounded-lg hover:bg-white hover:text-black transition duration-300">
            DECOUVRIR
          </button>
        </div>
      </div>
    </div>
  );
}
