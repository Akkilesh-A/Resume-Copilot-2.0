import React from 'react'
import { Link } from 'react-router-dom'

const MenuPage = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='bg-black text-white font-extrabold text-[7rem] flex-col flex justify-center items-center h-screen w-screen'>
            <Link to="/githubstatsform"><button className='text-[2rem] bg-white text-black p-4'>Get Github Stats</button></Link>
        </div>
        <div className='font-extrabold text-[7rem] flex-col flex justify-center items-center h-screen w-screen'>
            <Link to="/menuitems"><button className='text-[2rem] bg-black text-white p-4'>Get Resume Score</button></Link>
        </div>
    </div>
  )
}

export default MenuPage