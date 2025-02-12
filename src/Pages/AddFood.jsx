import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../Firebase/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'
import Lottie from 'lottie-react'
import cook from '../assets/cook.json'
import { Helmet } from 'react-helmet-async'

const AddFood = () => {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const foodInfo = {
      ...data,
      donatorName: user.displayName,
      donatorImage: user.photoURL,
      donatorEmail: user.email,
      status: 'available',
    }
    const saveFoodToDB = async () => {
      await axios.post('https://share-ab-ite-server.vercel.app/add_food', foodInfo, { withCredentials: true })
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              title: 'Successful!',
              text: 'Your food added successfully',
              icon: 'success'
            })
          }
        })
        .catch(err => {
          if (err) {
            console.log(err);
            Swal.fire({
              title: `${err.response.status}`,
              text: `${err.response.data.message}`,
              icon: "error"
            })
          }
        })
    }
    saveFoodToDB()
    reset()
  }



  return (
    <div className='container dark:bg-[#222831] mx-auto'>
      <Helmet title='ShareABite | Add Food'></Helmet>
      <div className=" min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <Lottie className='md:w-1/2' animationData={cook} />
        <div className="bg-white dark:bg-[#76ABAE] md:w-1/2 w-full p-8 rounded-lg m-5 shadow-md max-w-md">
          <h2 className="text-3xl font-bold text-[#A98467] dark:text-[#EEEEEE] mb-6">Add Food</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4">
              <label htmlFor="foodName" className="block text-gray-700 font-bold mb-2">
                Food Name
              </label>
              <input
                {...register("foodName", { required: true })}
                type="text"
                id="foodName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food name"
              />
              {errors.exampleRequired && <span>This field is required</span>}

            </div>
            <div className="mb-4">
              <label htmlFor="foodImage" className="block text-gray-700 font-bold mb-2">
                Food Image
              </label>
              <input
                {...register("foodImage", { required: true })}
                type="url"
                id="foodImage"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food image URL"
              />
              {errors.exampleRequired && <span>This field is required</span>}

            </div>
            <div className="mb-4">
              <label htmlFor="foodQuantity" className="block text-gray-700 font-bold mb-2">
                Food Quantity
              </label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                id="foodQuantity"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food quantity"
              />
              {errors.exampleRequired && <span>This field is required</span>}

            </div>
            <div className="mb-4">
              <label htmlFor="pickupLocation" className="block text-gray-700 font-bold mb-2">
                Pickup Location
              </label>
              <input
                {...register("pickupLocation", { required: true })}
                type="text"
                id="pickupLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pickup location"
              />
              {errors.exampleRequired && <span>This field is required</span>}

            </div>
            <div className="mb-4">
              <label htmlFor="expiryDateTime" className="block text-gray-700 font-bold mb-2">
                Expiry Date and Time
              </label>
              <input
                {...register("expiryDateTime", { required: true })}
                type="datetime-local"
                id="expiryDateTime"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.exampleRequired && <span>This field is required</span>}

            </div>
            <div className="mb-6">
              <label htmlFor="additionalNotes" className="block text-gray-700 font-bold mb-2">
                Additional Notes
              </label>
              <textarea
                {...register("additionalNotes")}
                id="additionalNotes"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter additional notes"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddFood