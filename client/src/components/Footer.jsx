import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/logo.png"


const Footer = () => {
    return (
        <footer className="bg-[#0B4F48]  rounded-t-3xl  mt-16 pt-20 p-10 font-sans tracking-wide">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:flex lg:items-center">
              <a href="#">
                <img src={logo} alt="logo"  />
              </a>
            </div>
    
            <div className="lg:flex lg:items-center">
              <p className="text-white max-w-[80%] text-center">La société COGEB IMMOBILIERE, fondée en 1999 et dirigée par Monsieur Mohamed LAZREG, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire.</p>
            </div>
    
            <div>
              
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-[#E2B04A] hover:text-white text-sm">ACCUEIL</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white text-sm">A PROPOS</a>
                </li>
                <li>
                  <a href="/searchProject" className="text-gray-300 hover:text-white text-sm">NOS PROJETS</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white text-sm">CONTACT</a>
                </li>
              </ul>
            </div>
    
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">CONTACT</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">cogebimmobiliere@gmail.com</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">+216 73 323 435</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">Avenue de l'environnement, Sousse, 
                  Tunisia, 4000</a>
                </li>
              </ul>
            </div>
          </div>
    
          <p className="text-gray-300 text-center text-sm mt-10">© 2023Copyright </p>
        </footer>
      );
    }

export default Footer
