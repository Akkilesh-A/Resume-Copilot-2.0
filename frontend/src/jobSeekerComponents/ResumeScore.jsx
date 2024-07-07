import React, { useEffect, useState } from 'react';
import { BlackButton } from '../components';
import { useSelector } from 'react-redux';

const ResumeScore = () => {
    const resumeScoreData = useSelector(state=>state.resumeScoreData)[0]
    return (
        <div className='hidden md:block bg-black md:h-screen text-white  w-screen pt-16'>
            {resumeScoreData.message == "-" ? <div className='text-center mt-[20%] text-[2.5em] font-bold'>You didn't upload any resume!🧐 </div> : 
            <div>
                <div className=' text-center text-[2.5em] font-bold '>
                    Your Resume Score
                </div>
                <div className='flex flex-wrap  flex-col justify-center p-32 '>
                    <div className="flex justify-center">
                        <div className=' bg-white text-black p-8 flex flex-col gap-8 rounded'>
                            <p className='text-[1.7rem]'><strong>Job Title:</strong> {resumeScoreData.jobTitle}</p>
                            <p className='text-[1.7rem]'><strong>Tech Stack:</strong> {resumeScoreData.techStack}</p>
                            { resumeScoreData.missingKeywords && <p className='text-[1.7rem]'><strong>Missing Keywords:</strong> {resumeScoreData.missingKeywords[0]}</p>}
                            {/* <p className='text-[1.7rem]'><strong>Score:</strong> {resumeScoreData.score}</p> */}
                            <p className='text-[1.7rem]'><strong>Results:</strong> {resumeScoreData.result}</p>
                        </div> 
                    </div>
                </div>
            </div>}
            <div className='md:visible invisible absolute bottom-10 right-10 flex gap-4'>
                <div className=''>
                    <BlackButton buttonText={"Try with another?"} link={"resumescoreform"} />
                </div>   
                <div className=''>
                    <BlackButton buttonText={"Home"} link={""} />
                </div> 
            </div> 
        </div>
    );
};

export default ResumeScore;
