import React from 'react'
import Heading from '../Components/Heading'
import { Link } from 'react-router-dom'

const AvaiableFood = () => {
  return (
    <div className='container mx-auto'>
      <Heading heading={'Available Foods '} para={'Explore our available food section, a vibrant hub where generosity meets need. Here, we showcase a diverse array of fresh produce, pantry staples, and nourishing meals, generously donated by our community of contributors. From surplus harvests to culinary delights, each offering represents an opportunity to make a meaningful difference. Join us in combating food insecurity and fostering compassion, one meal at a time'} />
      <div className='flex flex-col-reverse sm:flex-row sm:justify-around'>
        <div>
          <select class="py-3 px-4 my-2 pe-9 block max-w-sm border mx-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            <option selected="">Sort by expiry date</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className='flex items-center my-2 mx-5'>
          <div class="max-w-sm space-y-3">
            <input type="text" class="py-3 border px-5 block w-full border-gray-200 rounded-l-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search by food name" />
          </div>
          <button className="py-3 border px-5 bg-blue-600 text-white text-sm font-semibold rounded-r-lg hover:bg-blue-800 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none">Search</button>
        </div>
        
      </div>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
        <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 relative">
          <img className="w-full h-48 object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Food" />
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full">Available</span>
          <div className="p-4 md:p-5 flex-grow">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Food Name
            </h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Quantity: 100</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Location: Kitchen</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expiry Date: 2024-05-20</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Notes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores suscipit distinctio doloremque sed hic.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Profile" />
                <p className="text-sm font-semibold text-gray-800 dark:text-white">Ryan Wilson</p>
              </div>
              <Link to={`/details/${'dfgad'}`}>
                <button className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AvaiableFood