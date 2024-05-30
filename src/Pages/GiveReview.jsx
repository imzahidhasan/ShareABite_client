import axios from 'axios'
import Lottie from 'lottie-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import review from '../assets/review.json';
import Swal from 'sweetalert2';
const GiveReview = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        axios.post('https://share-ab-ite-server.vercel.app/give_review', { ...data, username: data.name })
            .then(res => {
                Swal.fire({
                    title: 'Sucessfull',
                    text: 'your review added successfully',
                    icon: 'success'
                })
            })
        reset()
    }
    return (
        <div className='container flex flex-col md:flex-row-reverse  items-center mx-auto'>
            <form className='w-full md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">Name</label>
                    <input  {...register("name", { required: true })} type="text" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="your name" />
                </div>
                <div className="">
                    <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">image url</label>
                    <input  {...register("pic", { required: true })} type="url" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="your image url" />
                </div>
                <div className=" space-y-3">
                    <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">Your review details here</label>
                    <textarea  {...register("quote", { required: true })} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="write here"></textarea>
                </div>
                <div className='flex justify-center  mt-4'>
                    <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Submit
                    </button>
                </div>
            </form>
            <Lottie className='md:w-1/2' animationData={review} />
        </div>
    )
}

export default GiveReview