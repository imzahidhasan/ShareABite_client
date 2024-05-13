import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Firebase/useAuth'
import { Helmet } from 'react-helmet-async'

const Details = () => {
  const { user } = useAuth()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const fetchData = async () => {
    setLoading(true)
    await axios.post(`https://share-ab-ite-server.vercel.app/details/${id}`, { email: user.email }, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: `${err.response.status}`,
          text: `${err.response.data.message}`,
          icon: 'warning'
        })

      })
  }

  const handleFoodRequest = (food) => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    (async () => {
      const { value: formValues } = await Swal.fire(
        {
          title: "Update Food Data",
          html: `
            <div class="mb-4">
              <label htmlFor="foodName" class="block text-gray-700 font-bold mb-2">
                Food Name
              </label>
              <input
              readonly
                type="text"
                id="foodName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food name"
                 value="${food.foodName}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="foodImage" class="block text-gray-700 font-bold mb-2">
                Food Image
              </label>
              <input
              readonly
                type="url"
                id="foodImage"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food image URL"
                 value="${food.foodImage}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="foodQuantity" class="block text-gray-700 font-bold mb-2">
                Food ID
              </label>
              <input
              readonly
                type="text"
                id="_id"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food quantity"
                 value="${food._id}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="pickupLocation" class="block text-gray-700 font-bold mb-2">
                Donator Email
              </label>
              <input
              readonly
                type="text"
                id="donatorEmail"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pickup location"
                 value="${food.donatorEmail}"
              />
            </div>
             <div class="mb-4">
              <label htmlFor="pickupLocation" class="block text-gray-700 font-bold mb-2">
                Donator Name
              </label>
              <input 
              readonly
                type="text"
                id="donatorName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pickup location"
                 value="${food.donatorName}"
              />
               <div class="mb-4">
              <label htmlFor="pickupLocation" class="block text-gray-700 font-bold mb-2">
                User Email
              </label>
              <input
              readonly
                type="text"
                id="userEmail"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pickup location"
                 value="${user.email}"
              />
            </div>
            </div>
            <div class="mb-4">
              <label htmlFor="expiryDateTime" class="block text-gray-700 font-bold mb-2">
              Expiry Date
              </label>
              <input
              readonly
               value="${food.expiryDateTime}"
                type="datetime-local"
                id="expiryDateTime"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
             <div class="mb-4">
              <label htmlFor="expiryDateTime" class="block text-gray-700 font-bold mb-2">
                Request Date
              </label>
              <input
              readonly
               value="${currentDateTime}"
                type="datetime-local"
                id="currentDateTime"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label htmlFor="additionalNotes" class=" text-left text-gray-700 font-bold mb-2">
               Pickup location
              </label>
              <input
              readonly
                id="pickupLocation"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter additional notes"
                value="${food.pickupLocation}"
              />
            </div>
            <div class="mb-6">
              <label htmlFor="additionalNotes" class=" text-left text-gray-700 font-bold mb-2">
                Additional Notes
              </label>
              <input
               
                id="additionalNotes"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter additional notes"
                value="${food.additionalNotes}"
              />
            </div>
      `,
          width: '50%',
          focusConfirm: true,
          preConfirm: () => {
            return {
              foodName: document.getElementById("foodName").value,
              foodImage: document.getElementById("foodImage").value,
              foodID: document.getElementById("_id").value,
              donatorEmail: document.getElementById("donatorEmail").value,
              userEmail: document.getElementById("userEmail").value,
              donatorName: document.getElementById("donatorName").value,
              requestDateTime: document.getElementById("currentDateTime").value,
              expiryDateTime: document.getElementById("expiryDateTime").value,
              pickupLocation: document.getElementById("pickupLocation").value,
              additionalNotes: document.getElementById("additionalNotes").value,
              status: 'requested'
            };
          }
        },);
      if (formValues) {
        await axios.put(`https://share-ab-ite-server.vercel.app/update_request_data`, formValues ,{withCredentials:true})
          .then(res => {
            Swal.fire({
              title: 'Request Successful!',
              text: 'you successfully made a request for this food',
              icon: 'success'
            })
          })
      }
    })()
  }
  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div>
      <Helmet title='ShareABite | Food details'></Helmet>
      {
        loading ? <div className="flex animate-pulse">
          <div className="ms-4 mt-2 w-full">
            <p className="h-12 bg-gray-200 rounded-full dark:bg-neutral-700" ></p>
            <ul className="mt-5 space-y-3">
              <li className="w-full h-12 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-12 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-12 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-12 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
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
                  <h1 className="text-3xl font-bold text-[#A98467] mb-2">{data.foodName}</h1>

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
                      <p className="text-gray-700 font-semibold mb-2">Additional Notes</p>
                      <p className="text-gray-600 mb-6">{data.additionalNotes}</p>
                    </div>
                    <div>
                      <p className='font-semibold mb-2'>Food Status</p>
                      <span className='text-white bg-green-600 px-2 rounded-full'>{data.status}</span>
                    </div>
                  </div>

                  <h1 className='text-xl font-semibold mb-2'>Donator Information</h1>
                  <div className="flex items-center mb-4">
                    <img
                      src={data.donatorImage}
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <div className='flex flex-col '>
                      <p className="text-gray-700 font-semibold">{data.donatorName}</p>
                      <p className="text-gray-600">{data.pickupLocation}</p>
                    </div>
                  </div>

                  <button onClick={() => handleFoodRequest(data)} className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-2 px-4 rounded">
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