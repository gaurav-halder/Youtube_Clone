import React from 'react'
import Button from './Button'

const List = [ "ALL","JavaScript","React","Redux","Router","CSS","Tailwind", "Game","Live","AI","ChatGpt","Music","HTML","Python"];

const ButtonList = () => {
  return (
    <div className='flex'>
        {List.map((name, index) =>(
            <Button key ={index} name={name}/>
        ))}
    </div>
  )
}

export default ButtonList