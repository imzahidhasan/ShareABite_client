import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [data, setData] = useState([])
  console.log(data);
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const fetchData = async () => {
    setLoading(true)
    await axios.get(`http://localhost:5000/details/${id}`)
      .then(res => {
        setLoading(false)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div>
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
        </div>
          : <div className="bg-[#F6EEE0] min-h-screen py-8">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={data.foodImage}

                    className="w-full h-80 object-cover"
                  />

                </div>
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-[#A98467] mb-2">{ data.foodName}</h1>
                  <div className="flex items-center mb-4">
                    <img
                      src={ data.donatorImage}

                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-700 font-semibold">{ data.donatorName}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Quantity</p>
                      <p className="text-gray-600">{data.quantity}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Expiry Date</p>
                      <p className="text-gray-600">{data.expiryDateTime}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Pickup Location</p>
                      <p className="text-gray-600">{data.pickupLocation}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">Additional Notes</p>
                  <p className="text-gray-600 mb-6">{data.additionalNotes}</p>
                  <button className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-2 px-4 rounded">
                    Request Food
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Details