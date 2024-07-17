import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { signoutFailed, signoutSuccess } from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { clearSavedListing } from '../redux/saveListing/saveListingSlice';
import { FaBookmark, FaSignOutAlt, FaUser } from 'react-icons/fa';

const ProfileOption = ({ user }) => {
    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleLogOut = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                useDispatch(signoutFailed(data.message))
                toast.error(data.message, {
                    autoClose: 2000,
                })
            }
            else {
                dispatch(signoutSuccess())
                dispatch(clearSavedListing())
            }
        } catch (error) {
            dispatch(signoutFailed(error.message))
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    }




    return (
        <div className="flex-none gap-2 z-12">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:outline-0 hover:border-0">
                    <div className="w-7 rounded-full">
                        <img className='rounded-full border border-brand-blue/20 h-8 w-8 object-cover' src={user.avatar} alt="profile image" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[999999999] font-heading p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52 ">
                    <li className="justify-start text-[#3A5A40] text-center">
                        {currentUser.username}
                    </li>
                    <li>
                        <Link to={'/profile'} className="justify-start text-[#3A5A40]">
                            <FaUser className='text-[#3A5A40]' /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={"/saved_listing"} className="justify-start text-[#3A5A40]">
                            <FaBookmark className='text-gray-800' /> Postes enregistrées
                        </Link>
                    </li>
                    <li>
                        <Link to={"/saved_project"} className="justify-start text-[#3A5A40]">
                            <FaBookmark className='text-gray-800' />  Projets enregistrées
                        </Link>
                    </li>
                    <li onClick={handleLogOut} >
                        <Link to={"/"} className="justify-start text-[#3A5A40]">
                            <FaSignOutAlt className='text-red-500' /> Deconnexion
                        </Link>
                    </li>
                </ul>
            </div>
            <ToastContainer />
        </div>
    )
};

export default ProfileOption;