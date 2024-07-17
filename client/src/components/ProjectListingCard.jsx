import React, { useEffect, useState } from 'react'
import { FaBath, FaBed, FaChartArea, FaBookmark  , FaLocationArrow, } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { handleProjectSave, handleProjectRemove, clearSavedProject } from '../redux/saveProject/saveProjectSlice'

const ProjectListingCard = ({ project }) => {
    const [heart, setHeart] = useState(false);
    const { saveProjects } = useSelector(state => state.savedProject)
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { title, address, area, etat,discountPrice, imgUrl, offer, price, type, _id } = project;

    const handleProjectsSave = (id) => {
        if (currentUser && currentUser.email) {
            const isSaved = saveProjects.some(saveProject => saveProject._id === id);
            if (isSaved) {
                const restProjects = saveProjects.filter(savedProject => savedProject._id !== id);
                dispatch(handleProjectRemove(restProjects));
                setHeart(false);
            } else {
                const projectToAdd = project
                dispatch(handleProjectSave(projectToAdd));
                setHeart(true);
            }
        }
        else {
            navigate('/login')
        }
    };



    useEffect(() => {
        if (currentUser) {
            const isSaved = saveProjects.some(saveProject => saveProject._id === _id);
            if (isSaved) {
                setHeart(true);
            } else {
                setHeart(false);
            }
        }
        else {
            dispatch(clearSavedProject())
        }
    }, [])



    return (
        <div className="listing_card bg-white shadow-lg shadow-black/10  hover:shadow-brand-blue/20 rounded-sm w-full hover:shadow-lg group sm:mr-auto sm:ml-0 mx-auto">
            <div className="card-container">
                <div
                    className="image_container relative overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/projects/${_id}`)}
                >
                    <img
                        className='max-h-[150px] min-h-[150px] w-full object-cover rounded-t-sm hover:scale-105 duration-300'
                        src={imgUrl[0]} alt="property image"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#3A5A40] py-1 px-2 ">
                        <p className='text-xs text-white  font-heading uppercase rounded-sm shadow-sm'>{etat === 'not started' ? 'Non démarré' : etat === 'en cours' ? 'En cours' : etat === 'terminee' ? 'Terminé' : ''}</p>
                    </div>
                    {
                        offer && <div className="absolute top-2 right-0 bg-amber-400 py-1 px-2 ">
                            <p className='text-xs capitalize text-black font-heading'>Offre!</p>
                        </div>
                    }
                </div>



                <div className="card_body group-hover:bg-brand-blue/5 duration-500  border-x border-b border-brand-blue/20 ">

                    <div
                        className="content-container p-3 pb-0 cursor-pointer"
                        onClick={() => navigate(`/projects/${_id}`)}
                    >
                        <h2 className="text-lg font-heading truncate uppercase duration-300 group-hover:text-[#3A5A40] ">{title}</h2>
                        <p
                            className='font-content text-xs font-bold truncate flex items-center justify-start mt-1'>
                            <FaLocationArrow className='mr-1 text-[#3A5A40]' />
                            {address}
                        </p>




                        <div className="info_container mt-4 flex items-center truncate">
                            <p
                                className='font-content text-xs font-bold truncate flex items-center justify-start ml-4'>
                                <FaChartArea className='mr-1 text-[#3A5A40]' />
                                {area} m²
                            </p>
                        </div>
                    </div>



                    {/* PRICE CONTAINER SECTION  */}
                    <div className="listing_footer grid grid-cols-2 align-middle border-t border-[#3A5A40]/40 mt-5 p-3 pb-4">

                        <div className="price_container truncate">
                            {offer ?
                                <p className='text-xl font-content text-[#3A5A40] font-bold  flex items-center justify-start truncate'>{discountPrice} DT <s className='text-gray-400  text-xs mt-1 ml-1'>{price} DT</s> </p>

                                : <p className='text-xl font-content text-[#3A5A40] font-bold  flex items-center justify-start truncate'>{price} DT</p>
                            }
                        </div>
                        <div className="footer_btn flex items-center justify-end mr-1">
                            <button
                                onClick={() => handleProjectsSave(_id)}
                                className={`text-lg drop-shadow-sm duration-300  ${heart ? 'text-[#3A5A40]' : "text-gray-300"} `}>
                                <FaBookmark className='' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectListingCard