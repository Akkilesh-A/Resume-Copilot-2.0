import React, { useEffect, useState } from 'react';

const ResumeScore = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('resumeScoreData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Get your resume score here</h1>
            <div>
                <p><strong>Message:</strong> {data.message}</p>
                <p><strong>Job Title:</strong> {data.jobTitle}</p>
                <p><strong>Tech Stack:</strong> {data.techStack}</p>
                <p><strong>Missing Keywords:</strong> {data.missingKeywords}</p>
                <p><strong>Score:</strong> {data.score}</p>
                <p><strong>Result:</strong> {data.result}</p>
            </div>
        </div>
    );
};

export default ResumeScore;
