import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdMic } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    };
    const handleClick = () => {
        window.location.href = '/';
      };

  return (
    <div className='grid grid-flow-col px-4 '>
        <div className='flex col-span-1 items-center ms-2'>
            <img onClick={() => toggleMenuHandler()} className='h-6 cursor-pointer' alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"/>
            <img className='h-16 px-6 cursor-pointer' alt="youtube-logo" onClick={handleClick} src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"/>
        </div>
        {/* <div className='flex items-center col-span-10 text-center justify-center'>
            <input className='w-1/2 border border-gray-300 p-2 rounded-l-full' type="text" placeholder='Search'/>
            <button className='border border-gray-300 p-2 sm:px-4 rounded-r-full bg-gray-100'><CiSearch size={24}/></button>
            <button className=' rounded-full sm:mx-4 sm:p-2 bg-gray-100'><MdMic size={23}/></button>
        </div> */}
        <div className='flex col-span-1 items-center justify-end'>
            <button className='sm:p-1.5 sm:px-4'><MdOutlineVideoCall size={28}/></button>
            <button className='p-1.5'><IoIosNotificationsOutline size={28} /></button>
            <img className='h-8 sm:px-4 cursor-pointer' alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
    </div>
  )
}

export default Header