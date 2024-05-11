import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../Firebase/useAuth'

const ManageMyFood = () => {
  const { user } = useAuth()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllData = async () => {
    await axios.get(`http://localhost:5000/manage_post/${user.email}`)
      .then(res => {
       setData(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    setLoading(true)
    getAllData()
  },[])
  return (
    <div>
      <div className="bg-[#F6EEE0] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#A98467] mb-8">Manage My Foods</h1>
          <div className="bg-white rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead className='text-left'>
                <tr className="bg-[#A98467] text-white">
                  <th className="px-4 py-2">Food</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Expiry Date</th>
                  <th className="px-4 py-2">Pickup Location</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
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
                    : data.map(food => <tr key={food._id} className="odd:bg-gray-100 even:bg-white">
                      <td className="px-4 py-2 flex items-center">
                       
                        <span>{ food.foodName}</span>
                      </td>
                      <td className="px-4 py-2">{food.quantity}</td>
                      <td className="px-4 py-2">{food.expiryDateTime}</td>
                      <td className="px-4 py-2">{food.pickupLocation}</td>
                      <td className="px-4 py-2">
                        <div className="flex">
                          <button className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-1 px-2 rounded mr-2">
                            Edit
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageMyFood