import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft, } from "react-icons/bs";
import { BiSolidArea } from 'react-icons/bi'
import { FaLocationArrow, FaBed, FaBath, FaAngleUp, FaAngleDown, FaShare, FaLock, FaBookmark } from "react-icons/fa"
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact';
import { handleLisingRemove, handleSave } from '../redux/saveListing/saveListingSlice';


const ListingPage = () => {

    const [listings, setListings] = useState({})
    const [isFeatureActive, setIsFeatureActive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [savedListing, setSavedListing] = useState(false)

    const { area, address, bath, bed, description, discountPrice, furnished, offer, parking, price, title, type, _id, userRef } = listings;

    const navigate = useNavigate()
    const params = useParams();
    const { currentUser } = useSelector(state => state.user)

    const { saveListings } = useSelector(state => state.savedListing)

    const dispatch = useDispatch()


    //====== Loading Post Data Here ======//
    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`/api/posts/${params.id}`)
            const json = await res.json();
            if (json.success === false) {
                toast.error(json.message, {
                    autoClose: 2000,
                })
                setLoading(false)
            }
            else {
                setListings(json)
                setLoading(false)
                if (_id) {
                    const isSaved = saveListings.some(saveListing => saveListing._id === _id);
                  
                    isSaved && setSavedListing(true);
                }
            }
        })()
    }, [])

    //====SLider Functions=====//
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-e-md bg-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-white/90 duration-300'
                onClick={onClick}
            >
                <BsArrowLeft className='text-[#3A5A40] text-lg sm:text-2xl' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-s-md bg-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-white/90 duration-300'
                onClick={onClick}
            >
                <BsArrowRight className='text-[#3A5A40] text-lg sm:text-2xl' />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        appendDots: dots => (
            <div style={{ bottom: 25, }}>
                <ul style={{ margin: "0px", color: '#fff' }}> {dots} </ul>
            </div>
        ),
    };


    // ======Handling User Post DELETE  =====//
    const handlePostDelete = async (postId) => {
        try {
            const res = await fetch(`/api/posts/delete/${postId}`, {
                method: 'DELETE',
            })
            const data = await res.json();



            //===checking reqest success or not ===//
            if (data.success === false) {
                //===showing error in tostify====//
                toast.error(data.message, {
                    autoClose: 2000,
                })
            }
            else {
                navigate('/profile')
            }
        } catch (error) {
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    }


    const handleUrlShare = async () => {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url)
    
            toast.success("URL coppied !", {
                autoClose: 1000,
            })
        } catch (error) {
            toast.error("URL coppied failed!", {
                autoClose: 2000,
            })
        }
    }



    const handleSaveListing = () => {
        const isSaved = saveListings.some(saveListing => saveListing._id === _id);
        if (isSaved) {
            const restListings = saveListings.filter(savedListing => savedListing._id !== _id);
            dispatch(handleLisingRemove(restListings));
            setSavedListing(false);
        } else {
            const listingToAdd = listings
            dispatch(handleSave(listingToAdd));
            setSavedListing(true);
        }
    }



    return (
        <>
            {
                loading
                    ?
                    <>
<div className="w-full h-32 bg-gray-500/50 rounded-lg"></div>
                        <Loading />
                        <p className='text-[#3A5A40] text-center font-heading text-xl'>Loading…</p>
                    </>
                    :
                    <div className="listing_section pb-16">
                            <div className="w-full h-32 bg-gray-400"></div>
                        <Slider {...settings} className='z-10 relative'>
                            {
                                listings.imgUrl && listings.imgUrl.map((listing, index) => (
                                    <div
                                        key={index}
                                        className="h-[300px] sm:h-[550px] w-full mx-auto z-10"
                                    >
                                        <img className='object-contain h-[80vh] mx-auto' src={listing} alt="image" />
                                    </div>
                                ))
                            }
                        </Slider>


                        <div className="container ">
                            <div className="property_details_container pt-4 sm:pt-12 ">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                                    <div className="lg:col-span-7  ">
                                        <div className='bg-white md:p-12 p-6 rounded-md shadow-sm shadow-[#3A5A40]'>
                                            <div className="property_info">
                                                <p className='font-heading text-[#3A5A40]'>
                                                    <span className='py-2 px-6 bg-[#3A5A40]/40 rounded-full border border-[#3A5A40] uppercase'>
                                                        {type === 'rent' ? 'louer' : type === 'sale' ? 'vendre' : ''}
                                                    </span>
                                                </p>

                                                <h1 className='font-heading font-bold mt-5 md:mt-8 text-2xl sm:text-3xl text-black capitalize'>
                                                    {title}
                                                </h1>
                                                <p className='font-content mt-3 font-medium text-lg flex items-center justify-left'>
                                                    <FaLocationArrow className='text-[#3A5A40]' />
                                                    <span className='ml-1'>
                                                        {address}
                                                    </span>
                                                </p>

                                                <div className="description">
                                                    <p className='font-heading mt-4 font-medium text-lg sm:text-xl'>Description</p>
                                                    <p className='font-content mt-1 font-medium text-xs sm:text-sm md:text-md lg:text-lg '>
                                                        {description}
                                                    </p>
                                                </div>

                                                {
                                                    offer ?
                                                        <p className='text-2xl font-heading text-[#3A5A40] mt-5  text-bold'>
                                                            {discountPrice} DT <span>
                                                                <s className='text-gray-400 text-sm'>{price} DT</s>
                                                            </span>
                                                        </p>
                                                        :
                                                        <p className='text-2xl font-heading text-[#3A5A40] mt-3  text-bold'>
                                                           {price} DT
                                                        </p>
                                                }
                                            </div>


                                            <div className="property_genarel_info grid-cols-3 grid max-w-md">
                                                <p className='font-heading mt-3 font-medium sm:text-lg  text-sm flex items-center justify-left'>
                                                    <FaBed className='text-[#3A5A40]' />
                                                    <span className='ml-1'>{bed} chambres</span>
                                                </p>
                                                <p className='font-heading mt-3 font-medium sm:text-lg  text-sm flex items-center justify-left'>
                                                    <FaBath className='text-[#3A5A40]' />
                                                    <span className='ml-1'>{bath} salle de bain</span>
                                                </p>
                                                <p className='font-heading mt-3 font-medium sm:text-lg text-sm flex items-center justify-left'><BiSolidArea className='text-[#3A5A40]' />
                                                    <span className='ml-1'>{area} m²</span>
                                                </p>
                                            </div>

                                        </div>


                                        {/* Feature Content Section */}

                                        <div className="property_details mt-8 bg-white rounded-md shadow-sm shadow-[#3A5A40] md:px-12 py-5 px-6">
                                            <div
                                                onClick={() => setIsFeatureActive(!isFeatureActive)}
                                                className="feature_heading flex items-center justify-between cursor-pointer"
                                            >
                                                <p className='font-heading text-lg sm:text-xl font-extrabold'>Details & Caractéristiques</p>
                                                {
                                                    isFeatureActive
                                                        ?
                                                        <i className='p-[5px] rounded-full bg-[#3A5A40]/20 flex items-center justify-center'>
                                                            <FaAngleUp className='text-xl text-[#3A5A40]' />
                                                        </i>
                                                        :
                                                        <i className='p-[5px] rounded-full bg-[#3A5A40]/20 flex items-center justify-center'>
                                                            <FaAngleDown className='text-xl text-[#3A5A40]' />
                                                        </i>
                                                }
                                            </div>
                                            <div className={`feature_info  transition-max-h ${isFeatureActive ? 'max-h-screen' : 'max-h-0'} overflow-hidden duration-500 ease-in-out`}>
                                                <div className="info_contaier mt-5 max-w-md ">
                                                    <div className="grid grid-cols-2">
                                                        <p className='font-heading text-md lg:text-lg '>
                                                            Chambres
                                                        </p>
                                                        <p className='font-heading  text-md lg:text-lg '>
                                                            {bed}
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-2">
                                                        <p className='font-heading text-md lg:text-lg '>
                                                            Salle de Bain
                                                        </p>
                                                        <p className='font-heading  text-md lg:text-lg '>
                                                            {bath}
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-2">
                                                        <p className='font-heading text-md lg:text-lg '>
                                                            Parking
                                                        </p>
                                                        <p className={`font-heading ${parking ? "text-green-600" : "text-gray-400"}  text-md lg:text-lg capitalize`}>
                                                            {
                                                                parking ? "Yes" : 'No'
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-2">
                                                        <p className='font-heading text-md lg:text-lg '>
                                                            Meublé
                                                        </p>
                                                        <p className={`font-heading ${furnished ? "text-green-600" : "text-gray-400"}  text-md lg:text-lg capitalize`}>
                                                            {
                                                                furnished ? "Yes" : 'No'
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-2">
                                                        <p className='font-heading text-md lg:text-lg '>
                                                        aire
                                                        </p>
                                                        <p className='font-heading  text-md lg:text-lg '>
                                                            {area} <span>m²</span>
                                                        </p>
                                                    </div>
                                                    {
                                                        offer &&
                                                        <div className="grid grid-cols-2 mt-2">
                                                            <p className='font-heading text-md lg:text-lg '>
                                                                Price
                                                            </p>
                                                            <p className='font-heading  text-md lg:text-2xl '>
                                                                ${discountPrice} <span>
                                                                    <s className='text-gray-400 text-lg'>${price}</s>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="lg:col-span-5">
                                        <div className="bg-white md:p-12 p-6 rounded-md shadow-sm shadow-[#3A5A40]">

                                            {
                                                currentUser && currentUser._id === userRef
                                                    ?
                                                    <div className="post_owner ">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 gap-2 ">
                                                            <div className="btn_container">
                                                                <button
                                                                    onClick={() => navigate(`/update_post/${params.id}`)}
                                                                    className='bg-[#3A5A40] hover:bg-[#3A5A40]/90 text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>
                                                                    Modifier Post
                                                                </button>
                                                            </div>
                                                            <div className="contant_btn_container">
                                                                <button
                                                                    onClick={() => handlePostDelete(params.id)}
                                                                    className='bg-red-600 hover:bg-red-600/90 text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>
                                                                    Supprimer Post
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="contant_btn_container mt-3">
                                                            <button
                                                                onClick={() => navigate(`/profile`)}
                                                                className='bg-amber-700 hover:bg-amber-700/90 uppercase text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>
                                                                Tous les Posts
                                                            </button>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="visitor_view">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 gap-2 ">
                                                            <div className="btn_container">
                                                                <button
                                                                    onClick={handleUrlShare}
                                                                    className='bg-[#3A5A40] hover:bg-[#3A5A40]/90 text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>

                                                                    <span className='flex items-center justify-center'>
                                                                        <FaShare className='mr-2 text-green-600' />
                                                                        Partager Url
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div className="contant_btn_container">
                                                                <button
                                                                    onClick={handleSaveListing}
                                                                    className='bg-[#3A5A40] hover:bg-[#3A5A40]/90 text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>

                                                                    <span className='flex items-center justify-center'>
                                                                        <FaBookmark className={`mr-2 ${savedListing ? "text-green-600" : "text-white"} `} />
                                                                        {
                                                                            savedListing ? "Saved" : "Save"
                                                                        }
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="btn_container mt-3">


                                                            {
                                                                currentUser && currentUser.email ?
                                                                    <div className="contant_owner_form mt-5">
                                                                        <Contact listing={listings} loadingState={loading} />
                                                                    </div>
                                                                    :
                                                                    <button
                                                                        onClick={() => navigate('/login')}
                                                                        className='bg-red-600 hover:bg-red-600/90 text-white w-full px-2 py-3 text-lg font-heading rounded-sm'>

                                                                        <span className='flex items-center justify-center'>
                                                                            <FaLock className='mr-2 text-[#3A5A40]' />
                                                                            Login to Contact
                                                                        </span>
                                                                    </button>
                                                            }

                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
            }
        </>
    )
}

export default ListingPage