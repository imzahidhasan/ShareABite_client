import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.json'
const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
           <Lottie animationData={error}/>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to={'/'} ><button className="px-8 py-3 font-semibold rounded-lg border text-blue-500 border-blue-500  ">Back to homepage</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage