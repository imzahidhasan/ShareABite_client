import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FoodCard from '../Components/FoodCard'
import { useForm } from 'react-hook-form'
import FoodCardHorizontal from '../Components/FoodCardHorizontal'
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from 'react-icons/tfi'
import { Helmet } from 'react-helmet-async'

const AvaiableFood = () => {
  const [data, setData] = useState([])
  const [layout, setLayout] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    await axios.get('http://localhost:5000/available_food')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }
  const {
    register,
    handleSubmit,
  } = useForm()

  const fetchSearchData = async (data) => {
    await axios.get(`http://localhost:5000/search_name/${data.searchName}`)
      .then(res => setData(res.data))
  }

  const onSubmit = (data) => {
    fetchSearchData(data)
  }
  const NewToOld = async () => {
    await axios.get('http://localhost:5000/sort_acceding')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }
  const OldToNew = async () => {
    await axios.get('http://localhost:5000/sort_descending')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }
  const onSelect = (e) => {
    const num = parseInt(e.target.value)
    if (num === 0) {
      return
    }
    if (num === 1) {
      NewToOld()
    } else if (num === 2) {
      OldToNew()
    }
  }
  const handleLayout = () => {
    setLayout(!layout)
  }


  useEffect(() => {
    fetchData()

  }, [])
  return (<>
    <Helmet title='ShareABite | Available food'></Helmet>
    <div className='container mx-auto'>
      <Heading heading={'Available Foods '} para={'Explore our available food section, a vibrant hub where generosity meets need. Here, we showcase a diverse array of fresh produce, pantry staples, and nourishing meals, generously donated by our community of contributors. From surplus harvests to culinary delights, each offering represents an opportunity to make a meaningful difference. Join us in combating food insecurity and fostering compassion, one meal at a time'} />
      <div className='flex flex-col-reverse sm:flex-row sm:justify-around'>
        <div className='flex items-center'>
          <select
            onChange={onSelect}
            className="py-3 px-4 border border-blue-600 my-2 pe-9 block max-w-sm  mx-5  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          >
            <option value="0">Sort by Date</option>
            <option value="1">New to Old</option>
            <option value="2">Old to New</option>
          </select>

          <div>
            <button onClick={handleLayout} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-bold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">
              {
                layout ? <TfiLayoutGrid3Alt /> : <TfiLayoutGrid2Alt /> 
              }
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center my-2 mx-5'>
            <div class="max-w-sm space-y-3">
              <input {...register("searchName", { required: true })} type="text" class="py-3 border border-blue-600 px-5 block w-full  rounded-l-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search by food name" />
            </div>
            <button className="py-3 border px-5 bg-blue-600 text-white text-sm font-semibold rounded-r-lg hover:bg-blue-800 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none">Search</button>
          </div>
        </form>
      </div>

      <div className={`grid grid-cols-1 ${layout ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-4 m-5`}>
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
            layout ? data.map(data => <FoodCardHorizontal key={data._id} data={data} />)
              :
              data.map(data => <FoodCard key={data._id} data={data} />)



        }
      </div>


    </div >
  </>
  )
}

export default AvaiableFood