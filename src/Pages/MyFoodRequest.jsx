import React from 'react'

const MyFoodRequest = () => {
  return (
    <div>
      <div className="bg-[#F6EEE0] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#A98467] mb-8">My Food Requests</h1>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#A98467] text-white">
                  <th className="px-4 py-2">Food</th>
                  <th className="px-4 py-2">Donor</th>
                  <th className="px-4 py-2">Pickup Location</th>
                  <th className="px-4 py-2">Expiry Date</th>
                  <th className="px-4 py-2">Request Date</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
             
                  <tr className="odd:bg-gray-100 even:bg-white">
                    <td className="px-4 py-2 flex items-center">
                      <img
                        src={'request.foodImage'}
                        alt={'request.foodName'}
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      <span>{'request.foodName'}</span>
                    </td>
                    <td className="px-4 py-2">{'request.donorName'}</td>
                    <td className="px-4 py-2">{'request.pickupLocation'}</td>
                    <td className="px-4 py-2">{'new Date(request.expiryDate'}</td>
                    <td className="px-4 py-2">{'new Date(request.requestDate'}</td>
                    <td className="px-4 py-2">{'request.quantity'}</td>
                  </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyFoodRequest