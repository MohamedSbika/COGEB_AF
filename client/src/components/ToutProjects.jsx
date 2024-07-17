import Slider from "react-slick";
import React, { useEffect, useState } from 'react'
import ProjectListingCard from '../components/ProjectListingCard'
import SkletonLoading from './SkletonLoading';
import { useNavigate } from 'react-router-dom';


const ToutProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projectslistings, setprojectslistings] = useState([])
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
                const res = await fetch(`/api/projects/`)
                const json = await res.json()
                if (json.success === false) {
                    setLoading(false)
                }
                else {
                    setprojectslistings(json)
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
                        Explore Our finished Projects
                    </h2>
                    <p className='font-content  font-medium text-sm sm:text-lg mt-3 max-w-3xl'>
                        Discover our Rental Showcase! Step into a world of diverse properties waiting for you. Embrace the possibilities of comfortable living spaces and find your perfect rental match. Start exploring your next home now!
                    </p>
                </div>

                 <div className="post_container !mt-4">
                    {
                        loading ?
                            <SkletonLoading />
                            :
                            <div className="slider_container">
                                <Slider {...settings} className='z-10 relative gap-3'>
                                    {
                                        projectslistings && projectslistings.map(project => <ProjectListingCard key={project._id} project={project} />)
                                    }
                                </Slider>
                            </div>
                    }
                </div>

                <div className="btn_container flex items-center justify-center " >
                    <button
                        className="group relative inline-flex items-center overflow-hidden rounded bg-[#3A5A40] px-8 py-3 text-white "
                        style={{
                            background: "linear-gradient(270deg, #B88824 0%, #E1C550 39%, #CEA93B 74%, #B07A12 100%)"
                          }}
                        onClick={() => navigate('/searchProject')}
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

                        <span className="text-sm font-medium transition-all  group-hover:me-4"  >
                            Explore More
                        </span>
                    </button>
                </div>

            </div>
        </section>
      );
    }
 export default ToutProjects