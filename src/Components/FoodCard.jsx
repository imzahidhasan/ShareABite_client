import React from 'react'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { IoFastFood, IoLocationSharp } from 'react-icons/io5'
import { PiNoteFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const FoodCard = ({ data }) => {
  return (
      <div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 relative">
              <img className="w-full h-48 object-cover rounded-t-xl" src={data.foodImage} alt="Food" />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full">{data.status}</span>
              <div className="p-4 md:p-5 flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                     {data.foodName}
                  </h3>
                  <div className="mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"><IoFastFood/><span className='font-medium'>Quantity:</span> {data.quantity}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"><IoLocationSharp /><span className='font-medium'> Pickup location:</span> {data.pickupLocation}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"><BsCalendarCheckFill/><span className='font-medium'>Expiry Date:</span>  {new Date(data.expiryDateTime).toLocaleDateString('en-US',{
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'})}</p>
                      <p className="text-sm text-gray-600 text-balance dark:text-gray-400 flex items-center gap-1"><PiNoteFill/><span className='font-medium'>Notes:</span> {data.additionalNotes}</p>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          <img className="w-10 h-10 rounded-full" src={data.donatorImage} alt="Profile" />
                          <p className="text-sm font-semibold text-gray-800 dark:text-white">{data.donatorName}</p>
                      </div>
                      <Link to={`/details/${data._id}`}>
                          <button className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">View Details</button>
                      </Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default FoodCard