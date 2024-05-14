import React from 'react'

const TestimonialCard = ({data}) => {
  return (
      <div>
          <div className="bg-black text-white rounded-lg p-4 max-w-md">
              <div className="flex items-center mb-2">
                  <img
                      src={data.pic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                      <h3 className="font-semibold">{data.name}</h3>
                      <p className="text-gray-400">@{data.username}</p>
                  </div>
              </div>
              <p className="text-gray-300">
                {data.quote}
              </p>
          </div>
    </div>
  )
}

export default TestimonialCard