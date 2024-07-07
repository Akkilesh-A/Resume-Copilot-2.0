import { BrowserRouter,Routes,Route } from "react-router-dom"
import {GitHubScore,GitHubStatsForm,ResumeScanner,ResumeScore} from "./jobSeekerComponents"
import {MenuPage,HomePage} from "./pages"
import {RecoilRoot} from 'recoil';

function App() {

  return (
    <div>
    <RecoilRoot>
        <BrowserRouter>
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
