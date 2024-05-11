import React from 'react'

const Details = () => {
  return (
    <div>
      <div className="bg-[#F6EEE0] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={'https://i.ibb.co/ngfPjPP/pexels-klaus-nielsen-6287527.jpg'}
             
                className="w-full h-64 object-cover"
              />
              
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-[#A98467] mb-2">name</h1>
              <div className="flex items-center mb-4">
                <img
                  src='https://i.ibb.co/ngfPjPP/pexels-klaus-nielsen-6287527.jpg'
                
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-700 font-semibold">donor name</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Quantity</p>
                  <p className="text-gray-600">quantity</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Expiry Date</p>
                  <p className="text-gray-600">data</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Pickup Location</p>
                  <p className="text-gray-600">location</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mb-2">Additional Notes</p>
              <p className="text-gray-600 mb-6">note</p>
              <button className="bg-[#A98467] hover:bg-[#8d6f56] text-white font-semibold py-2 px-4 rounded">
                Request Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details