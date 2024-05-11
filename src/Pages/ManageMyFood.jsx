import React from 'react'

const ManageMyFood = () => {
  return (
    <div>
      <div className="bg-[#F6EEE0] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#A98467] mb-8">Manage My Foods</h1>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#A98467] text-white">
                  <th className="px-4 py-2">Food</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Expiry Date</th>
                  <th className="px-4 py-2">Pickup Location</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                  <tr  className="odd:bg-gray-100 even:bg-white">
                    <td className="px-4 py-2 flex items-center">
                      <img
                        src={'food.imageUrl'}
                       
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      <span>'food name'</span>
                    </td>
                    <td className="px-4 py-2">{'quantity'}</td>
                    <td className="px-4 py-2">{'expiryDate'}</td>
                    <td className="px-4 py-2">{'pickupLocation'}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center">
                        <button className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-1 px-2 rounded mr-2">
                          Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageMyFood