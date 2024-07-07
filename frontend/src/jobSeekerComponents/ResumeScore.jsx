import React, { useEffect, useState } from 'react';
import { BlackButton } from '../components';

const ResumeScore = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(){
            const storedData =await localStorage.getItem('resumeScoreData');
            if (storedData) {
                setData(JSON.parse(storedData));
            }
        }
        getData()
    }, []);

    return (
        // <div className='bg-black text-white flex justify-center items-center flex-col w-screen h-screen gap-4'>
        //     <h1 className='text-6xl font-bold'>Get your resume score here</h1>
        //     {data && <div>
        //         <p className='text-[1.2rem]'><strong>Job Title:</strong> {data.jobTitle}</p>
        //         <p className='text-[1.2rem]'><strong>Tech Stack:</strong> {data.techStack}</p>
        //         <p className='text-[1.2rem]'><strong>Missing Keywords:</strong> {data.missingKeywords}</p>
        //         <p className='text-[1.2rem]'><strong>Score:</strong> {data.score}</p>
        //         <p className='text-[1.2rem]'><strong>Result:</strong> {data.result}</p>
        //     </div>}

        // </div>
        <div className='bg-black md:h-screen text-white  w-screen pt-16'>
        <div className=' text-center text-[2.5em] font-bold '>
            Your Resume Score
        </div>
        <div className='flex flex-wrap flex-col justify-center p-32 '>
                {data && 
                <div className="flex flex-col gap-8">
                    <p className='text-[1.7rem]'><strong>Job Title:</strong> {data.jobTitle}</p>
                    <p className='text-[1.7rem]'><strong>Tech Stack:</strong> {data.techStack}</p>
                    <p className='text-[1.7rem]'><strong>Missing Keywords:</strong> {data.missingKeywords}</p>
                    <p className='text-[1.7rem]'><strong>Score:</strong> {data.score}</p>
                    <p className='text-[1.7rem]'><strong>Result:</strong> {data.result}</p>
                </div>}
        </div>
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
