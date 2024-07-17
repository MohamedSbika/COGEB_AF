import React from 'react'
import { FaBath, FaCamera, FaCheck } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';





const ProjectCard = ({ projectInfo }) => {
    const {
        address,
        etat,
        description,
        discountPrice,
        furnished,
        imgUrl,
        parking,
        price,
        title,
        type,
        _id } = projectInfo.project;
    const navigate = useNavigate();

    return (
        <>
            <div
                className="rounded-md  bg-white  shadow-lg hover:shadow-xl "
            >
                <div
                    onClick={() => navigate(`/projects/${_id}`)}
                    className="relative flex items-end overflow-hidden rounded-md h-[200px] cursor-pointer "
                >
                    <img className='hover:scale-105 object-cover h-full w-full duration-300' src={imgUrl[0]} alt="wallpaper" />



                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-[#3A5A40] px-2 py-1 shadow-md">
                    <span className="text-xs text-white uppercase font-heading">
                        {etat === 'not started' ? 'Non démarré' : etat === 'en cours' ? 'En cours' : etat === 'terminé' ? 'Terminé' : ''}
                    </span>
                    </div>
                    <div className="absolute bottom-3 right-3 inline-flex items-center rounded-sm  px-2 py-1 ">
                        <span className=" text-xs text-white uppercase font-heading flex items-center ">
                            <FaCamera className='mr-1' />{imgUrl.length}
                        </span>
                    </div>
                    
                </div>



                {/* CARD BODY START HERE  */}
                <div className="p-4">
                    <div
                        onClick={() => navigate(`/projects/${_id}`)}
                        className='cursor-pointer'
                    >
                        <h2
                            className="text-[#3A5A40] font-heading text-xl truncate cursor-pointer">
                            {title}
                        </h2>
                        <p className="mt-1 text-sm text-[#3A5A40] font-content font-medium truncate"> {description}</p>
                        <p className="mt-2 text-sm text-[#3A5A40] font-content font-bold truncate"><span className='font-medium'>Address:</span> {address}</p>

                        <div className='mt-3 flex items-end justify-start'>


                            <p className='text-[#3A5A40] w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>{etat}</span> </p>



                        </div>
                        <div className='mt-2 flex items-end justify-start'>
                            <p className='text-[#3A5A40] w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className={` mr-1 mt-[2px] ${parking ? 'text-green-600' : "text-gray-400"}`} />parking</p>

                            <p className='text-[#3A5A40] w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className={`mr-1 mt-[2px] ${furnished ? 'text-green-600' : "text-gray-400"}`} />Meublé</p>
                        </div>



                        <div className="mt-3 flex items-end justify-between">
                            

                            <div className="inline-flex rounded-xl max-w-[150px]  duration-500">
                                <p className='font-heading text-lg truncate'>{projectInfo.project.area ? projectInfo.project.area : 0} <span className='font-content'>m²</span> </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 flex items-end justify-between'>
                        <button
                            onClick={() => navigate(`/update_project/${_id}`)}
                            className='bg-[#3A5A40] rounded-sm py-2 px-7 font-heading text-white hover:opacity-95 text-sm'>
                            Modifier
                        </button>
                        <button
                            onClick={() => projectInfo.handleProjectDelete(_id)}
                            className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm z-10'>
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ProjectCard