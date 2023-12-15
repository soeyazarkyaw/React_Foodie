import React from 'react'
import{RiRestaurant2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Link to={'/'}>
      <div className='flex items-center gap-3 my-6'>
        <RiRestaurant2Fill className='text-2xl text-green-700'/>
        <p className='text-xl font-bold text-green-700'>Foodie</p>
      </div>
    </Link>

  )
}

export default Nav