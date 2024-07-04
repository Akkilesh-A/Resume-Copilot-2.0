import React from 'react'
import { Link } from 'react-router-dom'

const WhiteButton = ({link, buttonText}) => {
  return (
    <div >
        <Link to={`/${link}`}><button className='border-black border-2 text-black text-[1.5rem] font-semibold rounded-md hover:bg-black hover:text-white p-4'>{buttonText}</button></Link>
    </div>
  )
}

export default WhiteButton