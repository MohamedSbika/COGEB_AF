import React, { useState } from 'react'
import { useForm } from 'react-hook-form'



const Singup = ({ userState }) => {
    const { setResponseData, setIsformSubmit } = userState;

    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    //======handling form submting function =====//
    const onSubmit = async (formData) => {
        setLoading(true)
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();

        setIsformSubmit(true)
        setResponseData(data)
        setLoading(false)
    };


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input {...register("username", { required: true })} type="text" placeholder="Username" className="form_input" />
                {errors.username && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <input {...register("email", { required: true })} type="email" placeholder="Email" className="form_input mt-5" />
                {errors.email && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <input {...register("password", { required: true })} type="password" placeholder="Password" className="form_input mt-5" />
                {errors.password && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <button
                    type='submit'
                    disabled={loading}
                    className="btn bg-[#3A5A40] text-white mt-5 rounded-md w-full hover:bg-[#3A5A40]/[.90]">
                    {
                        loading ? 'Loading...' : 'Create an account'
                    }
                </button>
            </form>

        </>
    )
}

export default Singup