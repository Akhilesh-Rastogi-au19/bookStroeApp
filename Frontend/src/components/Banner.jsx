import React from 'react'
import banner from '../../public/Banner.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='order-2 order-2 md:order-1 w-full pt: 6 md:w-1/2  '  >

       <div className='space-y-12 mt-32'>
       <h1 className = "text-4xl font-bold">
            Hello, welcome here to learn something <span className='text-pink-500'>new everyday !!! </span>
        </h1>

        <p>Explore Books is a space where stories, knowledge, and imagination come together.
           Here, you can discover a wide range of books across different genres—whether you love fiction, 
           motivation, learning, or creativity. 
         </p>

         {/* text input */}

         <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
       </div>
       <button className="btn btn-secondary ">Secondary</button>

        </div>
    <div className='order-1 w-full md:w-1/2 pt-20 pl-10'>
        <img src = { banner }  alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Banner;