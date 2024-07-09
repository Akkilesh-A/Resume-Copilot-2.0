import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='h-screen w-screen hidden md:flex'>
        <div className='bg-black text-white font-extrabold text-[7rem] flex-col flex justify-center items-end h-screen w-[50vw]'>
            <h1>Resume</h1>
            <h1>v</h1>
            <div className='absolute bottom-10 left-10'>
              <Link to="/about"><button className='animate-bounce text-[2rem] bg-white text-black p-4'>About Us!</button></Link>
            </div>
        </div>
        <div className='font-extrabold text-[7em] flex-col flex justify-center items-start h-screen w-[50vw]'>
            <h1>Copilot</h1>
            <h1>2</h1>
            <div className='absolute bottom-10 right-10'>
              <Link to="/menupage"><button className='animate-bounce text-[2rem] bg-black text-white p-4'>Click Here</button></Link>
            </div>
        </div>
    </div>
  )
}

export default HomePage