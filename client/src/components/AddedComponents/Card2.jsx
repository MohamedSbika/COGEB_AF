import React from "react";
import cov from '../../img/card1.png';

export default function Card2() {
  return (
    <div>
      <div className="bg-[#515557]  sm:mt-10 mt-2 h-auto grid place-items-center max-h-full max-w-[100vw]  sm:pt-40 mx-auto sm:p-32 p-6 font-[sans-serif]">
        <div className="grid md:grid-cols-2 items-center gap-4 ">
        <div className="md:col-span-1">
            <div className="mb-12 sm:max-w-[50vw]">
              <h2 className="text-white mb-8 text-3xl font-extrabold">
              A PROPOS DE NOUS
              </h2>
              <p className="text-white">La société COGEB IMMOBILIERE, fondée en 1999 et dirigée par Monsieur Mohamed LAZREG, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire. Son objectif principal est de développer des projets immobiliers de haute qualité en sélectionnant soigneusement les sites, en concevant des espaces répondant aux besoins des clients, et en garantissant un cadre de vie amélioré. Elle dispose d'une équipe compétente, notamment des architectes, bureaux d'études et de contrôle, qui accordent une attention particulière à l'architecture de ses bâtiments, devenus des références dans le domaine.</p>
            </div>
          </div>
          <div>
            <img
              src={cov}
              className="grid place-items-center sm:ml-8 rounded-lg shadow-[25px_-25px_0px_rgba(45,122,113,1)]"
              alt="Profile"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
