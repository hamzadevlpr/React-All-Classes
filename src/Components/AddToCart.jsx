import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';

function AddToCart() {
  const [price, setPrice] = useState(1450);
  const [count, setCount] = useState(1);

  //increase counter
  const increase = () => {
    setCount(count => count + 1);
  };
  //decrease counter
  const decrease = () => {
    if (count > 1) {
      setCount(count => count - 1);
    }
  };
  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="relative justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>


                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                  <div className="flex items-center border-2 float-right">
                    <button className="cursor-pointer rounded-l py-1 px-3.5 duration-100 hover:bg-indigo-600 hover:text-blue-50 font-medium text-md" onClick={decrease}>-</button>
                    <input
                      className="h-6 w-6 bg-white text-center text-xs outline-none"
                      type="number" value={count}
                    />
                    <button className="cursor-pointer rounded-r py-1 px-3 duration-100 hover:bg-indigo-600 hover:text-blue-50 font-medium text-md" onClick={increase}>+</button>
                  </div>
                  <div className="flex items-center space-x-4 bottom-5 right-5 absolute">
                    <div className="flex flex-col space-y-3 justify-evenly">
                      <p className="text-sm font-medium">Unit Price $ <span className='text-indigo-600'>{price}</span></p>
                      <p className="text-sm font-medium">Total Price $ <span className='text-indigo-600'>{price * count}</span></p>
                    </div>
                    <MdDeleteForever size={25} color='red' className='cursor-pointer' title='Delete'/>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>


                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                  <div className="flex items-center border-2 float-right">
                    <button className="cursor-pointer rounded-l py-1 px-3.5 duration-100 hover:bg-indigo-600 hover:text-blue-50 font-medium text-md" onClick={decrease}>-</button>
                    <input
                      className="h-6 w-6 bg-white text-center text-xs outline-none"
                      type="number" value={count}
                    />
                    <button className="cursor-pointer rounded-r py-1 px-3 duration-100 hover:bg-indigo-600 hover:text-blue-50 font-medium text-md" onClick={increase}>+</button>
                  </div>
                  <div className="flex items-center space-x-4 bottom-5 right-5 absolute">
                    <div className="flex flex-col space-y-3 justify-evenly">
                      <p className="text-sm font-medium">Unit Price $ <span className='text-indigo-600'>{price}</span></p>
                      <p className="text-sm font-medium">Total Price $ <span className='text-indigo-600'>{price * count}</span></p>
                    </div>
                    <MdDeleteForever size={25} color='red' className='cursor-pointer' title='Delete'/>
                  </div>
                </div>
              </div>
            </div>



          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700 font-medium">$ {count * price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$ USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full h-10 bg-indigo-600 px-5 py-1.5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none active:bg-indigo-500 rounded-xl ">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart