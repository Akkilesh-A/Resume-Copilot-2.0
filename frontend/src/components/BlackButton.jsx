import React from 'react'
import { Link } from 'react-router-dom'

const BlackButton = ({link, buttonText}) => {
  return (
    <div >
        <Link to={`/${link}`}><button className='border-2 border-white  text-white text-[1.5rem] font-semibold rounded-md hover:bg-white hover:text-black p-4'>{buttonText}</button></Link>
    </div>
  )
}

export default BlackButton