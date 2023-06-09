import React, { useState } from 'react'

function Practices() {
  const [input, setInput] = useState('Hamza Malik');

  return (
    <>
      <center className='mt-5'>
        <div className="flex flex-col space-y-5 w-72">

          <input type="text"
            onChange={(e) => setInput(e.target.value)}
            className="border-2 py-2 px-5 rounded-xl" placeholder='Type Something.....' />


          <button type="text"
            className='bg-indigo-600 text-white py-2 px-10 rounded-xl
          font-medium'>Change Color</button>


        </div>
        <h1 className='text-9xl mt-10' >{input}</h1>
      </center>
    </>
  )
}

export default Practices