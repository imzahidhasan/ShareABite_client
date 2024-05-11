import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    axios()

    setFoods()
  }, [])
  return (
    <>
      <div className="relative bg-[#186F65] text-[#B5CB99]">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Transforming surplus into substance for community bellies, and a healthier environment

            </h2>
            <p className="mb-6 text-base  md:text-lg">
              ShareABite connects surplus food to communities in need.
              We turn excess into nourishment, filling bellies across neighborhoods.
              But our impact goes further – reducing food waste for a greener planet.
              Join us in transforming surplus into substance while healing the Earth.
            </p>

            <p className="max-w-md mb-10 text-xs tracking-wide  sm:text-sm sm:mx-auto md:mb-16">
              Help your neighbor,Help your communities
            </p>
            <a

              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Heading heading={'Featured Foods'} para={'Discover our Featured Foods - an enticing showcase of abundant surplus meals and fresh produce donated by generous community members. Explore these highlighted options to find nourishing options while reducing food waste.'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5 container mx-auto">

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

    </>
  )
}

export default HomePage