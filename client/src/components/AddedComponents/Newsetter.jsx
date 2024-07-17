import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Newsetter() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div>
      <div className="flex border-2 my-10 rounded-md overflow-hidden max-w-md mx-auto font-[sans-serif]" data-aos="fade-up">
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full outline-none rounded-l-md bg-white text-gray-600 text-sm px-4 py-3"
          data-aos="fade-right"
        />
        <button
          type="button"
          className="flex items-center justify-center bg-[#0B4F48] px-5 text-sm text-white"
          data-aos="fade-left"
        >
          ENVOYER
        </button>
      </div>
    </div>
  );
}
