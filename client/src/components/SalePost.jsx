import Slider from "react-slick";
import React, { useEffect, useState } from 'react'
import ListingCard from '../components/ListingCard'
import SkletonLoading from './SkletonLoading';
import { useNavigate } from 'react-router-dom';


const SalePost = () => {
    const [loading, setLoading] = useState(true)
    const [saleListings, setSalelisting] = useState([])
    const navigate = useNavigate()


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              backgroundColor: "rgb(173, 170, 170)",
              borderRadius: "40px",
            }}
            onClick={onClick}
          />
        );
      }

       //===Load Data ===//
       useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/posts/search?type=sale`)
                const json = await res.json()
                if (json.success === false) {
                    setLoading(false)
                }
                else {
                    setSalelisting(json)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        })()
    }, []) 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: dots => (
          <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          {dots.slice(0, 5)}
          {dots.length > 5 && <li className="justify:center  "></li>}
          </ul>
      ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        < section >
            <div
                className="mx-auto max-w-screen-xl  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div className="content">
                    <h2 className='text-3xl font-bold sm:text-5xl font-heading  text-[#3A5A40] sm:text-left '>
                       Nos Posts à Vendre
                    </h2>
                    <p className='font-content  font-medium text-sm sm:text-lg mt-3 max-w-3xl'>
                    Découvrez nos postes à vendre et explorez une gamme variée de propriétés disponibles sur le marché. Que vous cherchiez une maison familiale, un terrain à bâtir, ou un appartement de standing, notre sélection répondra à vos besoins. Explorez nos offres et trouvez la propriété parfaite pour investir dans votre avenir avec nous                    </p>
                </div>

                 <div className="post_container !mt-4">
                    {
                        loading ?
                            <SkletonLoading />
                            :
                            <div className="slider_container">
                                <Slider {...settings} className='z-10 relative gap-3'>
                                    {
                                        saleListings && saleListings.map(listing => <ListingCard key={listing._id} listing={listing} />)
                                    }
                                </Slider>
                            </div>
                    }
                </div>

                <div className="btn_container flex items-center justify-center">
                    <button
                                            style={{
                                                background: "linear-gradient(270deg, #B88824 0%, #E1C550 39%, #CEA93B 74%, #B07A12 100%)"
                                              }}
                        className="group relative inline-flex items-center overflow-hidden rounded bg-[#3A5A40] px-8 py-3 text-white "
                        onClick={() => navigate('/search?filter=sale')}
                        >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                                className="h-5 w-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>

                        <span className="text-sm font-medium transition-all  group-hover:me-4">
                            Voir plus
                        </span>
                    </button>
                </div>

            </div>
        </section>
      );
    }
 export default SalePost