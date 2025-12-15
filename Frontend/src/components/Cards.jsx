import React from 'react'

function Cards({ item }) {
  return (
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-60 shadow-sm hover:shadow-gray-400 pb-2 hower:scal-105 druration-200 ">
      <figure>
        <img className="w-60 h-30"  src={item?.image} alt={item?.name} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {item?.name}
          <div className="badge badge-secondary">FREE</div>
        </h2>

        <p>{item?.title}</p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{item?.category}</div>

          <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-2 duration-200 ">₹{item?.price}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards;
