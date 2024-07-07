import { createSlice } from "@reduxjs/toolkit";

const initialState={resumeScoreData:[{
    message: '-',
    jobTitle: '-',
    techStack: '-',
    missingKeywords: '-',
    score: '-',
    result: ''
  }] }

export const resumeScoreSlice=createSlice({
    name:'resumeScoreSlice',
    initialState : initialState,
    reducers :{
        setResumeScore : (state,action)=>{
            if(state.resumeScoreData.length!==0){
                state.resumeScoreData.pop()
            }
            state.resumeScoreData.push(action.payload)
        }
    }
})

export const {setResumeScore} =resumeScoreSlice.actions
export default resumeScoreSlice.reducer