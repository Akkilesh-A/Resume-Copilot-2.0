import { BrowserRouter,Routes,Route } from "react-router-dom"
import {GitHubScore,GitHubStatsForm,ResumeScanner,ResumeScore} from "./jobSeekerComponents"
import {MenuPage,HomePage} from "./pages"
import {RecoilRoot} from 'recoil';

function App() {

  return (
    <div>
    <RecoilRoot>
        <BrowserRouter>
        <div className="md:hidden items-center justify-center flex-col flex w-screen h-screen bg-black text-white">
        <h1 className="font-bold text-[2rem]">Resume Copilot 2.0</h1>
          <p>Coming to your screens soon!</p>
          <p>Till then vist us through bigger screen devices!!</p>
        </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/githubstatsform" element={<GitHubStatsForm />} />
            <Route path="/githubstats/:gitHubDetails" element={<GitHubScore />} />
            <Route path="/menupage" element={<MenuPage />} />
            <Route path="/resumescoreform" element={<ResumeScanner />} />
            <Route path="/resumescore" element={<ResumeScore />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
