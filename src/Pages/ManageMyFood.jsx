import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../Firebase/useAuth'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'

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
  }, [])

  const handleEdit = async (id, food) => {
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
                type="url"
                id="foodImage"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food image URL"
                 value="${food.foodImage}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="foodQuantity" class="block text-gray-700 font-bold mb-2">
                Food Quantity
              </label>
              <input
                type="number"
                id="foodQuantity"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter food quantity"
                 value="${food.quantity}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="pickupLocation" class="block text-gray-700 font-bold mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pickup location"
                 value="${food.pickupLocation}"
              />
            </div>
            <div class="mb-4">
              <label htmlFor="expiryDateTime" class="block text-gray-700 font-bold mb-2">
                Expiry Date and Time
              </label>
              <input
               value="${food.expiryDateTime}"
                type="datetime-local"
                id="expiryDateTime"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              quantity: document.getElementById("foodQuantity").value,
              pickupLocation: document.getElementById("pickupLocation").value,
              expiryDateTime: document.getElementById("expiryDateTime").value,
              additionalNotes: document.getElementById("additionalNotes").value
            };
          }
        },);
      if (formValues) {
        await axios.put(`http://localhost:5000/update/${id}`, formValues).then(res => {
          if (res.data.modifiedCount>0) {
            Swal.fire(
              {
              title: "Successful",
              text: "Your food information updated successfully",
              icon: "success"
            },
              getAllData()
            )
          } else {
            Swal.fire({
              title: "Error!",
              text: "Connection timed out!",
              icon: "error"
            })
          }
        })
       
      }
    })()


  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/delete/${id}`)
          .then(res => {
            if (res.data.deletedCount>0) {
              getAllData()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
            }
          })
      }
    })
  }
  return (
    <div>
      <Helmet title='ShareABite | Manage my food'></Helmet>
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

                        <span>{food.foodName}</span>
                      </td>
                      <td className="px-4 py-2">{food.quantity}</td>
                      <td className="px-4 py-2">{new Date(food.expiryDateTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</td>
                      <td className="px-4 py-2">{food.pickupLocation}</td>
                      <td className="px-4 py-2">
                        <div className="flex">
                          <button onClick={() => handleEdit(food._id, food)} className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-1 px-2 rounded mr-2">
                            Edit
                          </button>
                          <button onClick={() => handleDelete(food._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
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