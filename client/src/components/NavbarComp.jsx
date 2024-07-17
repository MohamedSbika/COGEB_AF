import { NavLink, useLocation, Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsMessenger } from 'react-icons/bs';
import Profile from './ProfileOption';
import logo from '../img/logo.png';
import Hamburger from '../img/hamburgerMenu.svg';
import Close from '../img/close.svg';

export default function NavbarComp() {
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { notificationsDB } = useSelector(state => state.notification);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 right-0 p-0 bg-transparent rounded-lg justify-between w-full z-50">
      <div className={`flex flex-wrap rounded-lg md:flex-nowrap pt-4 pb-3 w-full items-center justify-between ${
        scrollPosition > 0 ? 'bg-gray-800/30' : 'bg-transparent'
      }`}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-14 sm:h-24 ml-3" alt="nom" />
        </Navbar.Brand>
        <div className="flex sm:mr-6 items-center md:order-2">
          <NavLink className={`ml-0 text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 ${toggle ? 'hidden' : 'block'}`} to={`${currentUser ? "/message" : "/login"}`}>
            <span className='relative'>
              <BsMessenger className='z-10 hover:text-[#3A5A40]' />
              {notificationsDB.length === 0 ? (
                <p className="text-xs px-[2px] font-heading font-medium bg-lime-600 text-white absolute top-[-13px] right-[-14px] flex items-center justify-center rounded-sm">new</p>
              ) : (
                <p className={`text-[11px] font-content font-medium bg-[#c00] text-white absolute top-[-10px] h-4 ${notificationsDB.length < 9 ? "w-3 right-[-8px]" : "w-4 right-[-10px]"} flex items-center justify-center rounded-sm`}>{notificationsDB.length}</p>
              )}
            </span>
          </NavLink>
          <NavLink className={`ml-0 text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 ${toggle ? 'hidden' : 'block'}`}>
            {currentUser ? (
              <Profile user={currentUser} />
            ) : (
              <Link to='/login' className="underline hover:text-[#3A5A40]">LOGIN</Link>
            )}
          </NavLink>
          <button
            className="block md:hidden mr-4"
            onClick={handleToggle}
          >
            <img src={toggle ? Close : Hamburger} alt="menu" className="h-6 w-6" />
          </button>
        </div>
        <Navbar.Collapse className={`w-full flex-col md:flex-row md:w-auto md:items-center ${toggle ? "block bg-gray-600/50 text-black" : "hidden"}`}>
          <NavLink
            className="text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 my-2 underline hover:text-[#3A5A40]"
            to="/"
            end
          >
            ACCUEIL
          </NavLink>
          <NavLink
            className="text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 my-2 underline hover:text-[#3A5A40]"
            to="/about"
          >
            A PROPOS
          </NavLink>
          <div
            className="relative text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 my-2 underline hover:text-[#3A5A40]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="cursor-pointer inline-flex underline items-center">
              NOS PROJETS
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            {isHovered && (
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700 absolute">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="/searchProject?filter=not started" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Nos Projet Non Réalisées
                    </a>
                  </li>
                  <li>
                    <a href="/searchProject?filter=en cours" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Nos Projet En Cours De Réalisation
                    </a>
                  </li>
                  <li>
                    <a href="/searchProject?filter=terminee" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Nos Projet Terminées
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <NavLink
            className="text-white font-bold text-sm sm:text-lg md:text-md lg:text-xl mx-2 sm:mx-3 md:mx-3 my-2 underline hover:text-[#3A5A40]"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
