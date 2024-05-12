import React from 'react'

const FoodCardHorizontal = () => {
  return (
      <div>
          <div class="bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none ">
                  <img class="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"/>
              </div>
              <div class="flex flex-wrap">
                  <div class="p-4 flex flex-col h-full sm:p-7">
                      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                          Card title
                      </h3>
                      <p class="mt-1 text-gray-500 dark:text-neutral-400">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <div class="mt-5 sm:mt-auto">
                          <p class="text-xs text-gray-500 dark:text-neutral-500">
                              Last updated 5 mins ago
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default FoodCardHorizontal