// import React from "react";
// import cover from "../../img/contact_cover.jpg";
// import { Breadcrumb } from "flowbite-react";
// import { HiHome } from "react-icons/hi";

// export default function ContactHeader() {
//   return (
//     <div>
//       <div className="relative h-[80vh] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-[#0B4F48] before:opacity-50 before:z-10">
//         <img
//           src={cover}
//           alt="contact cover"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
//           <h2 className="sm:text-4xl uppercase text-3xl font-bold mb-6">
//             Contact
//           </h2>
//           <Breadcrumb
//             className="text-white"
//             aria-label="Default breadcrumb example"
//           >
//             <Breadcrumb.Item
//               href="/"
//               icon={() => <HiHome className="text-white text-xl mr-2" />}
//               className="text-white"
//             >
//               <div className="text-white text-xl">Home</div>
//             </Breadcrumb.Item>

//             <Breadcrumb.Item className="text-white">
//               <div className="text-white text-xl">Contact</div>
//             </Breadcrumb.Item>
//           </Breadcrumb>
          
//         </div>
//       </div>
//       <div  className="grid -mt-20 mb-14 mx-auto max-w-[70vw] sm:max-w-[80vw] sm:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4">
//           <div className="flex sm:max-w-[12vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
//             <div className="bg-[#0B4F48] rounded-full p-4">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6  rounded-full  text-white">
//                 <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
//               </svg>
//             </div>
          

//             <h4 className="text-gray-800 text-base font-bold mt-4">Visit office</h4>
//             <p className="text-sm text-gray-600 mt-2"> 123 Main Street, City, Country</p>
//           </div>
//           <div className="flex sm:max-w-[12vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
//             <div className="bg-[#0B4F48] rounded-full p-4">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
//                 <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
//                 <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
//               </svg>
//             </div>
//             <h4 className="text-gray-800 text-base font-bold mt-4">MAIL</h4>
//             <p className="text-sm text-gray-600 mt-2">cogebimmobiliere@gmail.com</p>
//           </div>
//           <div className="flex sm:max-w-[12vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
//             <div className="bg-[#0B4F48] rounded-full p-4">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-white">
//                 <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
//               </svg>
//             </div>
//             <h4 className="text-gray-800 text-base font-bold mt-4">Chat to us</h4>
//             <p className="text-sm text-gray-600 mt-2">info@example.com</p>
//           </div>
          
//         </div>
//     </div>
//   );
// }
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cover from "../../img/contact_cover.jpg";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function ContactHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="relative h-[80vh] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-[#0B4F48] before:opacity-50 before:z-10">
        <img
          src={cover}
          alt="contact cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6" data-aos="fade-down">
          <h2 className="sm:text-4xl uppercase text-3xl font-bold mb-6">
            Contact
          </h2>
          <Breadcrumb
            className="text-white"
            aria-label="Default breadcrumb example"
          >
            <Breadcrumb.Item
              href="/"
              icon={() => <HiHome className="text-white text-xl mr-2" />}
              className="text-white"
            >
              <div className="text-white text-xl">Home</div>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-white">
              <div className="text-white text-xl">Contact</div>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="grid -mt-20 mb-14 mx-auto max-w-[70vw] sm:max-w-[80vw] lg:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4">
        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-[#0B4F48] rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6  rounded-full  text-white">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-gray-800 text-base font-bold mt-4">Visitez le bureau
          </h4>
          <p className="text-sm text-gray-600 mt-2"> 123 Main Street, City, Country</p>
        </div>
        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-[#0B4F48] rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
          <h4 className="text-gray-800 text-base font-bold mt-4">E-MAIL</h4>
          <p className="text-sm text-gray-600 mt-2">cogebimmobilier@gmail.com</p>
        </div>
        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-[#0B4F48] rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-gray-800 text-base font-bold mt-4">Discutez avec nous</h4>
          <p className="text-sm text-gray-600 mt-2">Cojeb-immobiliere.com</p>
        </div>
      </div>
    </div>
  );
}
