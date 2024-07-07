import {configureStore} from "@reduxjs/toolkit"
import resumeScoreSlice from "../features/resumeScoreSlice"

export const store=configureStore({
    reducer : resumeScoreSlice
})