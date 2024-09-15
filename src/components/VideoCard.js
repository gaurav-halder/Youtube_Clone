import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;

  return (
    <div className='sm:p-2 sm:pt-2 sm:m-2 sm:mx-2 sm:w-[272px] w-screen'>
        <img className=" w-screen rounded-lg sm:pt-0 pt-3" alt="thumbnail" src={thumbnails.medium.url}/>
        <ul className='sm:px-2 px-4'>
            <li className='font-bold pt-2 '>{title}</li>
            <li className='text-sm'>{channelTitle}</li>
            <li className='text-sm'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;