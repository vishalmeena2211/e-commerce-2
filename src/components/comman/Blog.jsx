import React from 'react'
import './blog.css'

const Blog = () => {
  return (
      <div class="text-gray-900 bg-gray-100">
  <section class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
    <div class="flex flex-wrap items-center justify-between mb-8">
      <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl">
        Continually Scale Results
      </h2>
      <a href="/" class="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
          Go to insights
        </a>
    </div>

    <div class="flex flex-wrap -mx-4">
      <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
        <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img" class="object-cover object-center w-full h-48" />
        <div class="flex flex-grow">
          <div class="triangle"></div>
          <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
            <div>
              <a href="/" class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable Schemas</a
                >
                <a
                  href="/"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                  What Zombies Can Teach You About Food
                </a>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?
              </p>
            </div>
            <div>
              <a href="/" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
        >
          <img
            src="https://source.unsplash.com/L9_6GOv40_E/400x300"
            alt="Card img"
            class="object-cover object-center w-full h-48"
          />
          <div class="flex flex-grow">
            <div class="triangle"></div>
            <div
              class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
            >
              <div>
                <a
                  href="/"
                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Client-based Adoption</a
                >
                <a
                  href="/"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                  Old School Art
                </a>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
              </p>
            </div>
            <div>
              <a href="/" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
        >
          <img
            src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
            alt="Card img"
            class="object-cover object-center w-full h-48"
          />
          <div class="flex flex-grow">
            <div class="triangle"></div>
            <div
              class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
            >
              <div>
                <a
                  href="/"
                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Intellectual Capital</a
                >
                <a
                  href="/"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                  5 Things To Do About Rain
                </a>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
              </p>
            </div>
            <div>
              <a href="/" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Blog
