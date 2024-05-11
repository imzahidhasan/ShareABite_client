import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import axios from 'axios'
import FoodCard from '../Components/FoodCard'

const HomePage = () => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true)
    await axios.get('http://localhost:5000/available_food/highest_quantity')
      .then(res => {
        setLoading(false)
        setFoods(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
   

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
        {
          loading ? <div className="flex animate-pulse">
            <div className="flex-shrink-0">
              <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
            </div>

            <div className="ms-4 mt-2 w-full">
              <p className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700" ></p>

              <ul className="mt-5 space-y-3">
                <li className="w-full h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li className="w-full h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li className="w-full h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                <li className="w-full h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              </ul>
            </div>
          </div> :
            foods.map((foodItem) => <FoodCard key={foodItem._id} data={foodItem} />)
        }
      </div>

    </>
  )
}

export default HomePage