import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6 '>
            <p className='text-white text-xl font-extralight'>
                Tuesday, 03 Feb 2024 | Local time: 02:28 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Berlin, DE
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation