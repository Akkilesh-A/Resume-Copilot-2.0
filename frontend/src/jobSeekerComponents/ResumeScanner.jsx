import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlackButton } from '../components';
import { useDispatch } from 'react-redux';
import { setResumeScore } from '../features/resumeScoreSlice';

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
    const dispatch =useDispatch()
    const [loading,setLoading] =useState(false)
    const navigate =useNavigate()

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
                dispatch(setResumeScore({message:data.message,jobTitle:jobTitle,techStack:techStack,score:data.score,result:data.result}))
                setLoading(false)          
                navigate(`/resumescore`)
            } else {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="hidden md:flex justify-center h-screen w-screen items-center flex-col bg-black ">
            <div className='bg-white rounded p-8 '>
                <div className='flex justify-center items-center mb-12'>
                    <h1 className='text-[2.5em] font-extrabold'>Get your Resume Score here!</h1>
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
                    <div className='flex gap-4 justify-center items-center' colSpan={2}>
                        <button onClick={handleApi} className='mt-4 hover:bg-black hover:fill-white gap-4 hover:text-white flex justify-center items-center rounded-xl px-4 p-2 border-4 border-black font-bold' >
                            Upload & Process
                        </button>
                        {loading && <div className='animate-spin p-4 rounded-full border-black border-4 border-dotted'>🤖</div>}
                    </div>       
                </div>   
            </div>
            <div className='md:visible invisible'>
                <div className='absolute bottom-10 right-10'>
                    <BlackButton buttonText={"Go Back"} link={"menupage"} />
                </div>   
                <div className='absolute bottom-10 right-48'>
                    <BlackButton buttonText={"Home"} link={""} />
                </div> 
            </div>
        </div>        
    );
}

export default ResumeScanner;
