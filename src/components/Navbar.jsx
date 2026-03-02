import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10 bg-indigo-600 '>
      <Link to='/' className='text-2xl font-semibold'>Media Search</Link>
      <div className='flex justify-between items-center gap-5'>
        <Link className='text-xl bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg shadow active:scale-95' to='/collection'>Collection</Link>
        <Link className='text-xl bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg shadow active:scale-95' to='/'>Search</Link>
      </div>
    </div>
  )
}

export default Navbar