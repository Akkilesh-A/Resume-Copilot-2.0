import React, { useState } from 'react';

function ResumeScanner() {
    const [image, setImage] = useState('');
    const [jobTitle,setJobTitle]=useState("")
    const [techStack,setTechStack]=useState("")
    const [finalData,setData]=useState({
        message: '',
        jobTitle: '',
        techStack: '',
        missingKeywords: '',
        score: '',
        result: ''
      } )
    const [loading,setLoading] =useState(false)

    function handleImage(e) {
        setImage(e.target.files[0]);
    }

    async function handleApi() {
        setLoading(true)
        const formData = new FormData();
        formData.append('image', image);
        formData.append('jobTitle', jobTitle);
        formData.append('techStack', techStack);

        const url = "https://resume-copilot-2-0.onrender.com/resume_scan_with_ai"; // Ensure this matches your Flask route
        const options = {
            method: 'POST',
            body: formData
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {
                console.log(data.message)
                setData({message:data.message,jobTitle:jobTitle,techStack:techStack,score:data.score,result:data.result})  
                console.log(finalData)
                await localStorage.setItem('resumeScoreData',JSON.stringify(finalData))    
                setLoading(false)          
                window.location.href=`/resumescore`
            } else {
                alert(data.error || 'Failed to process file');
                setLoading(false)
            }
        } catch (error) {
            alert('An error occurred while processing the file, Try again later!');
            setLoading(false)
        }
    }

    return (
        <div className='mt-24 mx-8'>
            <div className='flex justify-center items-center mb-12'>
                <h1 className='text-[2.5em] font-extrabold'>🧑🏻‍🏫 Get your Resume Score here! 👩🏻‍🏫</h1>
            </div>
            <div className='flex flex-col justify-around items-center mb-12'> 
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th className='p-4'>Job Position</th>
                            <td><input className='border-2 border-black p-2 rounded w-[20vw]' type="text" name="jobTitle" id='jobTitle' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} /></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='p-4'>Tech Stacks</th>
                            <td><textarea rows="5" className='border-2 border-black p-2 rounded w-[20vw]' type="text" name="techStack" id='techStack' value={techStack} onChange={(e) => setTechStack(e.target.value)} placeholder='Enter Tech Stacks each seperated by a comma' /></td>
                        </tr>
                        <tr>
                            <th className='p-4'>Resume</th>
                            <td><input type='file' name='file'className='border-2 border-black p-2 rounded w-[20vw]' onChange={handleImage} /></td>
                        </tr>
                    </tbody>
                </table> 
                <div className='flex flex-col justify-center items-center' colSpan={2}>
                    <button onClick={handleApi} className='mt-4 hover:bg-black hover:fill-white  hover:text-white flex justify-center items-center rounded-xl px-4 p-2 border-4 border-black font-bold' >
                        Upload ⬆️ & Process 🤖
                    </button>
                    {loading && <div className='mt-8 animate-spin p-4 rounded-full border-black border-4 border-dotted'></div>}
                </div>       
            </div>   
        </div>        
    );
}

export default ResumeScanner;
