import React from 'react';
import cov from '../../img/card1.png';

export default function Card2About() {
  return (
    <div>
      <div className="grid place-items-center max-h-full max-w-[100vw] sm:mb-6 mb-28 pt-20 sm:pt-40 mx-auto sm:p-32 p-6 font-[sans-serif]">
        <div className="grid md:grid-cols-2 items-center gap-4 justify-between">
          
          <div className="md:col-span-1 mt-24">
            <div className="mb-16 sm:max-w-[50vw] sm:ml-8 md:ml-20"> 
              <h2 className="text-white  -z-10 w-fit text-3xl mb-10 px-10 py-6 bg-[#3A5A40] rounded-lg font-extrabold">
                A PROPOS DE NOUS
              </h2>
              <p> 
                La société COGEB IMMOBILIERE, fondée en 1999 et dirigée par Monsieur Mohamed LAZREG, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire. Son objectif principal est de développer des projets immobiliers de haute qualité en sélectionnant soigneusement les sites, en concevant des espaces répondant aux besoins des clients, et en garantissant un cadre de vie amélioré. Elle dispose d'une équipe compétente, notamment des architectes, bureaux d'études et de contrôle, qui accordent une attention particulière à l'architecture de ses bâtiments, devenus des références dans le domaine.
              </p>
            </div>
          </div>
          <div>
            <img
              src={cov}
              className="relative -z-20 sm:ml-8 rounded-lg"
              style={{
                boxShadow: '350px 0px 0px 60px rgba(58,90,64,1)',
                marginTop: '-45px', 
                marginBottom: '-45px', 
              }}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
