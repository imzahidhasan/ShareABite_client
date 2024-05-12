import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../Firebase/useAuth'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { user, logout,setUser } = useAuth()
  const handleLogOut = () => {
    logout()
    setUser(null)
  }
  const Navlinks = <>
    
    <NavLink to={'/'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 font-medium` : `font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`} >Home</NavLink>
    
    <NavLink to={'/available_food'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 font-medium` : `font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}>Available Food</NavLink>

   
    {user ? <>
      <NavLink to={'/add_food'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 font-medium` : `font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}>Add Food</NavLink>

      <NavLink to={'/manage_my_food'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 font-medium` : `font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}>Manage My Food</NavLink>
      <NavLink to={'/my_food_request'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 font-medium` : `font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500`}>My Food Request</NavLink>
      <div>
      <div class="flex gap-2 items-center" >
        <img class="inline-block size-8 rounded-full" src={user.photoURL} alt="Image Description" />
        <button onClick={handleLogOut} type="button" className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
          Logout
        </button>
      </div>
      </div>
    </>  :
      <NavLink to={'/login'} className={({ isActive }) => isActive ? `text-blue-600 dark:text-blue-500 flex items-center gap-x-2 font-medium  sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-neutral-700 ` : `flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500`} >
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        Log in
      </NavLink>
    }
    
    <button onClick={toggleDarkMode} type="button" className="items-center gap-x-2 py-2 px-3  rounded-full text-sm  text-white dark:hover:bg-white/20 hover:bg-gray-400">
      {
        darkMode ? <div className='flex font-medium justify-center items-center gap-2'>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          light
        </div>
          : <div className='text-gray-500 font-medium gap-2 flex justify-center items-center'>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg> dark
          </div>
      }
      
      
    </button>
    
    
    
   
  </>
  return (
    <>

      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="flex justify-center gap-2 items-center text-xl font-semibold dark:text-white" aria-label="Brand">
              <img src={'/logo.png'} className='size-8' alt="logo" />
              ShareABite</Link>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg className="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              {Navlinks}
            </div>
          </div>
        </nav>
      </header>


    </>
  )
}

export default Navbar