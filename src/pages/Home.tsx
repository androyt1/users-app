import React from 'react'

const Home = () => {
  return (
    <section className='flex flex-col justify-center items-center h-[calc(100vh-60px)]  shadow-lg shadow-gray-600 p-3'>
    <h1  className='text-3xl md:text-4xl text-stone-500 font-serif font-bold'>The User's App</h1>
    <p className='text-stone-600 text-md w-full md:w-[60%] text-center font-serif mt-3 tracking-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis accusantium qui in sed consequatur quidem veritatis nobis delectus consequuntur asperiores placeat corporis vitae quae inventore similique, quam, officiis voluptatum.</p>

    <button className='py-2 px-12 bg-gray-800 text-gray-50 font-sans font-bold mt-8 hover:bg-gray-50 hover:text-gray-800  hover:shadow-md hover:shadow-gray-900 shadow-md shadow-gray-800'>View Users</button>

   </section>
  )
}

export default Home