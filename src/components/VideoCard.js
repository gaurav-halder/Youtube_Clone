import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-[272px]'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
        <ul className='px-2'>
            <li className='font-bold pt-2'>{title}</li>
            <li className='text-sm'>{channelTitle}</li>
            <li className='text-sm'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;