import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // Debugging: log the state value to ensure it's correct
    // console.log("Is Menu Open:", isMenuOpen);

    return !isMenuOpen ? null : (
        <div className='sm:w-64 px-6 w-40 shadow-lg absolute bg-white'>
            <ul className='border-b py-3'>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                <li>Youtube Music</li>
            </ul>
            <h1 className='pt-3 pb-1'>You</h1>
            <ul className='w-64 px-4 pb-3'>
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your videos</li>
                <li>Liked videos</li>
                <li>Downloads</li>
            </ul>
            <h1 className='border-t pt-3 pb-1'>Watch Later</h1>
            <ul className='border-b px-4 pb-3'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    );
}

export default Sidebar;
