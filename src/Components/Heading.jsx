import React from 'react'

const Heading = ({heading,para}) => {
  return (
      <div className='text-center text-gray-800 m-4 space-y-2 tracking-wide'>
          <h1 className='text-3xl font-bold'>{ heading}</h1>
          <p className='text-base font-medium text-balance'>{ para}</p>
    </div>
  )
}

export default Heading