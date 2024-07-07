import React, { useEffect, useState } from 'react';

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

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className='bg-black text-white flex justify-center items-center flex-col w-screen h-screen gap-4'>
            <h1 className='text-6xl font-bold'>Get your resume score here</h1>
            <div>
                <p className='text-[1.2rem]'><strong>Job Title:</strong> {data.jobTitle}</p>
                <p className='text-[1.2rem]'><strong>Tech Stack:</strong> {data.techStack}</p>
                <p className='text-[1.2rem]'><strong>Missing Keywords:</strong> {data.missingKeywords}</p>
                <p className='text-[1.2rem]'><strong>Score:</strong> {data.score}</p>
                <p className='text-[1.2rem]'><strong>Result:</strong> {data.result}</p>
            </div>
        </div>
    );
};

export default ResumeScore;
