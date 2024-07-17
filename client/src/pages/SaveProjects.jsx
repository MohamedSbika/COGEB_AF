// import React from 'react'
import { useSelector } from 'react-redux'
import ProjectListingCard from '../components/ProjectListingCard'
// import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const SaveProjects = () => {
    const { saveProjects } = useSelector(state => state.savedProject)
    const navigate = useNavigate()
    return (
        <>
            <section>
                <div className="container pt-6 ">
                <div className="w-full h-32 bg-gray-500/50 rounded-lg"></div>
                    <div className="heading_cotainer  border-b-2 pt-2 pb-5 border-[#3A5A40] flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-3">
                        <h1 className='font-heading text-2xl text-left '>Vosprojets enregistées</h1>
                        <button
                            className="group relative inline-flex items-center overflow-hidden rounded bg-[#3A5A40] px-6 py-2 text-white "
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

                            <span className="text-sm font-medium transition-all  group-hover:me-4">
                                Découvrir plus
                            </span>
                        </button>
                    </div>
                    <div className="projects pt-5">
                        {
                            saveProjects.length === 0 ?
                                <div className='py-20'>

                                    <p className='bg-white text-center text-sm sm:text-2xl font-heading font-bold flex flex-col items-center justify-center max-w-3xl mx-auto py-10 text-black px-5 rounded shadow-md'>
                                        <span>Votre liste d'enregistrement des projets est vide.</span>
                                    </p>

                                </div>
                                :
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8 pb-20">
                                    {
                                        saveProjects && saveProjects.map(project => <ProjectListingCard key={project._id} project={project} />)
                                    }
                                </div>
                        }

                    </div>
                </div>
            </section>
            <>
                <Footer />
            </>
        </>
    )
}

export default SaveProjects