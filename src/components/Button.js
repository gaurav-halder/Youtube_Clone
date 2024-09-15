import React from 'react'

const Button = ({name}) => {
  return (
    <div className='sm:m-2 ms-2.5'>
        <button className='px-3 py-1.5 bg-gray-100 rounded-lg font-bold text-sm'>{name}</button>
    </div>
  )
}

export default Button