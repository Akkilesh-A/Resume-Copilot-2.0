import React from 'react'
import { Link } from 'react-router-dom'
import { WhiteButton } from '../components'

const MenuPage = () => {
  return (
    <div className='hidden md:flex flex-col h-screen'>
        <div className='bg-black text-white font-extrabold text-[7rem] flex-col flex justify-center items-center h-screen w-screen'>
            <Link to="/githubstatsform"><button className='text-[2rem] bg-white text-black p-4'>Get Github Stats</button></Link>
        </div>
        <div className='font-extrabold text-[7rem] flex-col flex justify-center items-center h-screen w-screen'>
            <Link to="/resumescoreform"><button className='text-[2rem] bg-black text-white p-4'>Get Resume Score</button></Link>
        </div>
        <div className='md:visible invisible'>
        <div className='absolute bottom-10 right-10'>
          <WhiteButton buttonText={"Home"} link={""} />
        </div>   
      </div> 
    </div>
  )
}

export default MenuPage