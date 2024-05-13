import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../Firebase/useAuth';
import { Link, Navigate } from 'react-router-dom';
import signup from '../assets/signup.json'
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
const SignUp = () => {
    const { createUser, updateUser, user } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, password, photoURL } = data
        createUser(email, password)
            .then(user => {
                updateUser(name, photoURL)
            })
        reset()
    }


    return (
        <>
            <Helmet title='ShareABite | Sign Up'></Helmet>
            {
                user ? <Navigate to={'/'} />
                    :
                    <div className='flex flex-col-reverse md:flex-row container mx-auto'>
                        <Lottie className='w-full md:w-1/2' animationData={signup}/>
                        <div className="mt-7 w-full md:w1/2 max-w-96 mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                        Already have an account?
                                        <Link to={'/login'} className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid gap-y-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm mb-2 dark:text-white">Name</label>
                                                <div className="relative">
                                                    <input  {...register("name", { required: true })} type="text" id="name" name="name" className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                                </div>
                                                {errors.name && <p className='text-sm text-red-600 font-medium'>This field is required</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                                <div className="relative">
                                                    <input  {...register("email", { required: true })} type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                                </div>
                                                {errors.email && <p className='text-sm text-red-600 font-medium'>This field is required</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="photoURL" className="block text-sm mb-2 dark:text-white">Photo URL</label>
                                                <div className="relative">
                                                    <input  {...register("photoURL", { required: true })} type="url" id="photoURL" name="photoURL" className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />

                                                </div>
                                                {errors.photoURL && <p className='text-sm text-red-600 font-medium'>This field is required</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm mb-2 dark:text-white">Password</label>
                                                <div className="relative">
                                                    <input  {...register("password", { required: true })} id="hs-toggle-password" type="password" className="py-3 px-4 block w-full  border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" />
                                                    <button type="button" data-hs-toggle-password='{"target": "#hs-toggle-password"}' className="absolute top-0 end-0 p-3.5 rounded-e-md">
                                                        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                                            <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                                            <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                                            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                                            <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                                {errors.password && <p className='text-sm text-red-600 font-medium'>This field is required</p>}
                                            </div>


                                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default SignUp