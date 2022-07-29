import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-[60px] flex justify-between items-center px-3 bg-gray-800 text-gray-50'>
        <h3 className='text-xl font-serif font-semibold'><NavLink to='/'>Home</NavLink></h3>
        <nav>
            <ul>
                <li className='inline-block ml-4 text-xs'><NavLink to='/'>Home</NavLink></li>
                <li  className='inline-block ml-4 text-xs'><NavLink to='/users'>Users</NavLink></li>
                <li className='inline-block ml-4 text-xs'><NavLink to='/new-user'>Add User</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar