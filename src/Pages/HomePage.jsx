import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import axios from 'axios'
import FoodCard from '../Components/FoodCard'
import video from '../assets/bg_video.mp4'
import { Helmet } from 'react-helmet-async'
import Faq from '../Components/Faq'
import TestimonialCard from '../Components/TestimonialCard'
import testimonial from '../assets/testimonial.json'
import { data } from 'autoprefixer'
import { Link } from 'react-router-dom'
import Chart from '../Components/Chart'
const HomePage = () => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true)
    await axios.get('https://share-ab-ite-server.vercel.app/available_food/highest_quantity')
      .then(res => {
        setLoading(false)
        setFoods(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()


  }, [])
  return (<>
    <div >
      <Helmet title='ShareABite | Home'></Helmet>
      <div className="relative bg-[#186F65] text-[#d8dcd2]">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
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
      <div className='container mx-auto'>

        <Heading heading={'Featured Foods'} para={'Discover our Featured Foods - an enticing showcase of abundant surplus meals and fresh produce donated by generous community members. Explore these highlighted options to find nourishing options while reducing food waste.'} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5 container mx-auto">
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
        <Link className='flex justify-center' to={'/available_food'}><button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">
          Show All
        </button></Link>
        <Heading heading={'Testimonials'} para={`Explore heartfelt messages from donors who have graciously shared why they choose to support our mission. Their stories illuminate the compassion and dedication behind each contribution, underscoring the profound impact of collective generosity in combating hunger and transforming lives.`} />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          {
            testimonial.map(data => <TestimonialCard key={data.pic} data={data} />)
          }
        </div>
        <Heading heading={'Our Impacts'} para={`Explore the tangible impact of our work on individuals and families as we illuminate the transformative journey from struggle to empowerment. Witness firsthand the positive changes our initiatives bring to the lives of those we serve, from providing nourishment to fostering resilience and hope. Join us in celebrating the meaningful difference we make, one person, one family at a time.`} />
        <Chart/>
        <div>
          <Heading heading={'Frequently Asked Questions'} para={`We understand that you may have questions about our Community Food Sharing and Surplus Reduction Platform. To help you better understand how it works and address any concerns, we've compiled a list of frequently asked questions and their answers. If you can't find what you're looking for here, please don't hesitate to reach out to us directly`} />
          <Faq />
        </div>
         
      </div>
    </div>
  </>
  )
}

export default HomePage