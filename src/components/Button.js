import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2'>
        <button className='px-3 py-1.5 bg-gray-100 rounded-lg font-bold text-sm'>{name}</button>
    </div>
  )
}

export default Button