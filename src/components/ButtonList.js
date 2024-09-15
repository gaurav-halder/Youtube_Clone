import React from 'react'
import Button from './Button'

// const List = [ "ALL","JavaScript","React","Redux","Router","CSS","Tailwind", "Game","Live","AI","ChatGpt","Music","HTML","Python"];
const List = [ "ALL","JavaScript","React","Redux","Router"];

const ButtonList = () => {
  return (
    <div className='flex w-screen'>
        {List.map((name, index) =>(
            <Button key ={index} name={name}/>
        ))}
    </div>
  )
}

export default ButtonList