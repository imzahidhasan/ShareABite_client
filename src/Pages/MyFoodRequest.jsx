import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../Firebase/useAuth'
const MyFoodRequest = () => {
  const [data, setData] = useState([])
  const { user } = useAuth()
  const fetchData = async () => {
    await axios.get(`http://localhost:5000/request_data/${user.email}`)
      .then(res => {
        setData(res.data)
      }).catch(err=>console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div className="bg-[#F6EEE0] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#A98467] mb-8">My Food Requests</h1>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full table-auto">
              <thead className='text-left'>
                <tr className="bg-[#A98467] text-white">
                  <th className="px-4 py-2">Food</th>
                  <th className="px-4 py-2">Donor</th>
                  <th className="px-4 py-2">Pickup Location</th>
                  <th className="px-4 py-2">Expiry Date</th>
                  <th className="px-4 py-2">Request Date</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              {
                data.map(food => <tbody key={food._id}>
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="px-4 py-2 flex items-center">
                      {food.foodName}
                    </td>
                    <td className="px-4 py-2">{food.donatorName}</td>
                    <td className="px-4 py-2">{food.pickupLocation}</td>
                    <td className="px-4 py-2">{new Date(food.expiryDateTime).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</td>
                    <td className="px-4 py-2">{new Date(food.requestDateTime).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</td>
                    <td className="px-4 py-2">{food.quantity}</td>
                  </tr>
                </tbody>)
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFoodRequest