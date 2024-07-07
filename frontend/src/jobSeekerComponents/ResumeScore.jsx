import React from 'react'
import { useParams } from 'react-router-dom'

const ResumeScore = () => {

    const {details} = useParams()
    const detailsArray=details.split("&")
  return (
    <div>
        <h1>Get your resume score here</h1>
        <p>{detailsArray[0]}</p>
        <p>{detailsArray[1]}</p>
        <p>{detailsArray[2]}</p>
        <p>{detailsArray[3]}</p>
        <p>{detailsArray[4]}</p>
        <p>{detailsArray[5]}</p>
    </div>
  )
}

export default ResumeScore